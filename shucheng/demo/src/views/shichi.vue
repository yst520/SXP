<template>
  <div id="shichi" scroll-container>
    <div class="lunbo">
      <img src="/shichi/shichi.jpg" alt="" />
    </div>
    <div class="container">
      <div class="tabBar">
        <ul>
          <li
            v-for="(item, index) in tabText"
            :key="index"
            @click="toggle(index)"
            :class="selected == index ? 'Green' : ''"
          >
            {{ item.text }}
          </li>
        </ul>
      </div>
      <div class="tab-content1" v-show="selected == 0">
        <ul>
          <li v-for="(item, index) in shichiList" :key="index">
            <img :src="'/shichi/' + item.img + '.jpg'" alt="" />
            <div class="inner">
              <p class="title">
                {{ item.describe }}
              </p>
              <div class="tigong">
                <span>提供</span><i>{{ item.fen }}</i
                >份
              </div>
              <div class="baoming">
                <span>已有</span><i>{{ item.baoming }}</i
                >人报名
              </div>
              <p class="huodong">{{ item.state }}</p>
              <div class="baojia">{{ item.baojia }}</div>
              <div class="xiangqing">
                查看详情 <i class="el-icon-arrow-right"></i>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="tabBar2" v-show="selected == 1">
      <ul>
        <li
          v-for="(item, index) in barList"
          :key="index"
          :class="index == selected2 ? 'borderGreen' : ''"
          @click="toggle2(index)"
        >
          <i :class="item.class"></i><span>{{ item.text }}</span>
        </li>
      </ul>
    </div>
    <div class="tab-content2" v-show="selected == 1">
      <div id="pubuliu">
        <div class="vue-water-easy" ref="waterWrap">
          <div v-for="(items, clos) in list" :key="clos" class="colsW">
            <ul>
              <li
                v-for="(item, index) in items"
                :key="index"
                @click="toDetailCode(item)"
              >
                <div class="pb-inner">
                  <el-image :src="item && item.url" alt="" lazy></el-image>
                  <p style="margin: 3px 0 1px">{{ item.name }}</p>
                  <p>{{ item.createTime }}</p>
                  <el-rate
                    v-model="item.value"
                    disabled
                    show-score
                    text-color="#ff9900"
                    score-template="{value}"
                  >
                  </el-rate>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getShichiList } from "@/api/goods";
import Footer from "../components/Footer.vue";
export default {
  name: "Shichi",
  components: { Footer },
  props: [""],
  data() {
    return {
      listQuery: {
        page: 1,
        pageSize: 20,
        sort: "+id",
      },
      shichiList: [
        {
          img: "s1",
          describe:
            "【爆款·领券减100】聚天鲜 （特大号） 厄瓜多尔白虾南美大虾对虾2kg盒装 45-55只",
          fen: 16,
          baoming: 223,
          state: "活动已结束",
          baojia: "暂无报价",
        },
      ],
      dataList: [],
      waterfallsLeft: [], //  存储在左侧的数据
      waterfallsRight: [], //  存储在右侧的数据
      page: 0, //  无限加载，模拟分页
      isEnd: false,
      once: 0, //上拉刷新 只请求一次接口
      loading: null,
      list: [
        [
          {
            url: "/shichi/pinglun/pl1.png",
            name: "首先非常感谢京东及商家提供的试用机会，金大牛潮汕牛肉丸正宗手打潮州手工牛肉丸子汕头特产牛筋丸火锅食材关东煮烧烤丸子 牛肉丸250g（简装）",
            createTime: "2022-01-09",
            value: 4.8,
          },
          {
            url: "/shichi/pinglun/pl2.png",
            name: "收到的鸡蛋非常新鲜，个头均匀。真的好吃了调皮。不管是蒸鸡蛋，做蛋饺，还是炒鸡蛋，颜色品相都很好。打开蛋黄很新鲜家人都喜欢吃，品质保证的好，收到包装大气上档次，",
            createTime: "2022-01-11",
            value: 4.9,
          },
          {
            url: "/shichi/pinglun/pl3.png",
            name: "海南 精选红心木瓜真的好好，木瓜非常的新鲜！我很喜欢吃木瓜，开箱就闻到也有一股淡淡的香味，很清香",
            createTime: "2022-01-12",
            value: 4.9,
          },
          {
            url: "/shichi/pinglun/pl4.png",
            name: "宝贝今天收到了，包装不错。沒收到货前一直担心鸡蛋运输过程的防损问题。货到开箱彻底放心了，单个存放，多重泡沫保护，一个没坏。可见商家很用心，给个赞。",
            createTime: "2022-01-10",
            value: 5.0,
          },
        ],
        [
          {
            url: "/shichi/pinglun/pl5.png",
            name: "发货很快，使用的是中通快递，商品是从大连市甘井子发货的，3.19号下单、3.21号就收到了。外包装是快递纸盒包装，里面是塑料袋包裹的罐头。一个罐头的重量是90g，固形物含量≥40%；在上面旋转拧开九可以打开罐头，罐头上面有专门附带的小匙，",
            createTime: "2022-01-11",
            value: 5.0,
          },
          {
            url: "/shichi/pinglun/pl6.png",
            name: "牛肉丸挺不错的，很有嚼劲，真空包装，没有破损，没有涨袋漏气，很弹滑，特别满意，无论口感还是味道都是特别的鲜美！ 拿来下粉真的巨好吃!!加肠不如加肉丸~煮熟了拌饭也好吃，或者切片乃煮点青菜下面吃也很鲜，,真的百搭!咬起来感觉牛肉比较多，比超市买的好多了，吃起来一点也不腻。",
            createTime: "2022-01-13",
            value: 4.9,
          },
          {
            url: "/shichi/pinglun/pl7.png",
            name: "宝贝非常的好，也非常的棒，总体来说非常满意。对比了很多家，这家描述详细、图片清晰，有问题客服也能不厌其烦的解答。毕竟是网络购物，总是有点担心，收到货后发现担心多余了，很好的东西。虽然这里只代表个人意见，但是东西还是不错的，应该可以放心购买。",
            createTime: "2022-01-14",
            value: 4.8,
          },
          {
            url: "/shichi/pinglun/pl8.png",
            name: "藕片酸辣可口，吃起来很脆，微辣的，咸淡适中，味道很不错，密封包装，生产日期也近，包装严实，发货速度也很快。价格实惠，值得购买！",
            createTime: "2022-01-09",
            value: 5.0,
          },
          {
            url: "/shichi/pinglun/pl1.png",
            name: "金大牛潮汕牛肉丸正宗手打潮州手工牛肉丸 东西已经收到！手感不错！用料扎实！质量很好！非常美味 牛肉丸挺不错的，很有嚼劲，真空包装，没有破损，没有涨袋漏气，到货还是冰冻状态，牛肉丸冻得还有冰很弹滑，有嚼劲，特别满意，",
            createTime: "2022-01-08",
            value: 5.0,
          },
        ],
        [
          {
            url: "/shichi/pinglun/pl9.png",
            name: "洪湖剁椒鱼头，新鲜活鱼制作，冷藏配送。鲢鱼肉质鲜嫩，剁椒味道酸甜香辣，味道正宗。做出味道的比饭店的还好吃。值得推荐。",
            createTime: "2022-01-22",
            value: 4.9,
          },
          {
            url: "/shichi/pinglun/pl10.png",
            name: "这是我网上买过最好的鸡蛋，也是最香最好吃的鸡蛋，真正的农村土鸡蛋，我拿到货一看这小小的鸡蛋就知道了，真正懂的人就知道土鸡蛋一般都是这种很小的小鸡蛋，而非市场上卖的那种比较大的，说是土鸡蛋，这黄却是非常淡",
            createTime: "2022-01-23",
            value: 4.8,
          },
          {
            url: "/shichi/pinglun/pl11.png",
            name: "收到丸子了，看见包装日期也是很新鲜的，证明用料新鲜，所以口感很好。包装也是很用心，里边还有冰袋，回来就放冰箱了，特别筋道，牛丸很结实但又很弹牙，咬开还能吃出牛肉的味道",
            createTime: "2022-01-20",
            value: 4.8,
          },
          {
            url: "/shichi/pinglun/pl12.png",
            name: "【梅州助农馆】客来客往梅州沙田柚金柚 广东柚子新鲜水果1只袋装（约0.8-1kg） 卖家发货很快而且包装完好没有破损 梅州沙田柚金柚称为柚中之王毫不为过 虽然个头不大但是颜色非常金黄",
            createTime: "2022-01-19",
            value: 4.9,
          },
        ],
      ],
      selected2: 0,
      selected: 0,
      tabText: [
        {
          text: "本期试吃",
        },
        {
          text: "试吃报告",
        },
      ],
      barList: [
        { text: "全部", class: "icon1" },
        { text: "新鲜水果", class: "icon2" },
        { text: "海鲜水产", class: "icon3" },
        { text: "肉禽蛋品", class: "icon4" },
        { text: "冷冻速食", class: "icon5" },
      ],
    };
  },

  mounted() {
    window.addEventListener("scroll", this.scrollBottom, false);
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      getShichiList(this.listQuery).then((response) => {
        console.log(response.data.list);
        this.shichiList = response.data.list;
      });
    },
    //  一张一张的 渲染图片
    start(i) {
      const _this = this;
      let dataList = _this.dataList;
      if (i > 5) {
        _this.loading.close(); //loading可能会转很久
      }
      if (i >= dataList.length && _this.$refs.waterWrap) {
        //本次接口数据 渲染完成
        _this.once = 0;
        _this.loading.close();
        return;
      }
      _this
        .loadImg(dataList[i], i)
        .catch(() => {})
        .finally(() => {
          _this.start(++i);
        });
    },
    loadImg(item) {
      const _this = this;
      let srcUrl = item && item.url;
      return new Promise(function (resolve, reject) {
        if (item && srcUrl) {
          let img = new Image();
          img.src = srcUrl;
          img.onload = function () {
            var index = _this.getMinHeight();
            _this.list[index].push(item);
            _this.$nextTick(() => {
              resolve(img);
            });
          };
        } else {
          reject("数据错误");
        }
      });
    },
    getMinHeight() {
      let index = 0;
      try {
        if (!this.$refs.waterWrap) {
          return index;
        }
        let childs = this.$refs.waterWrap.children || [];
        let minx = childs[0].children[0].offsetHeight;
        for (let i = 1; i < childs.length; i++) {
          let element = childs[i];
          let h = element.children[0].offsetHeight;
          if (h < minx) {
            minx = h;
            index = i;
          }
        }
      } catch (e) {
        return index;
      }
      return index;
    },

    // 划到底部
    scrollBottom() {
      if (this.isEnd) {
        // 无数据了 isEnd=true；
        return;
      }
      if (this.once === 1) {
        // 滑动禁止多次请求接口
        return;
      }

      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop; //变量windowHeight是可视区的高度
      var windowHeight =
        document.documentElement.clientHeight || document.body.clientHeight; //变量scrollHeight是滚动条的总高度
      var scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight; //滚动条到底部的条件
      if (scrollTop + windowHeight == scrollHeight) {
        //已滚动底部
        this.once = 1;
        // this.getList();
      }
    },
    toggle(index) {
      this.selected = index;
    },
    toggle2(index) {
      this.selected2 = index;
    },
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollBottom, false);
  },
};
</script>
<style lang='scss' scoped>
@import "./scss/shichi.scss";
</style>