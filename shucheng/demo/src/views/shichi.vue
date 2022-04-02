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
          <li>
            <img src="/shichi/s1.jpg" alt="" />
            <div class="inner">
              <p class="title">
                【爆款·领券减100】聚天鲜 （特大号）
                厄瓜多尔白虾南美大虾对虾2kg盒装 45-55只
              </p>
              <div class="tigong"><span>提供</span><i>15</i>份</div>
              <div class="baoming"><span>已有</span><i>1234</i>人报名</div>
              <p class="huodong">活动已结束</p>
              <div class="baojia">暂无报价</div>
              <div class="xiangqing">
                查看详情 <i class="el-icon-arrow-right"></i>
              </div>
            </div>
          </li>
          <li>
            <img src="/shichi/s2.jpg" alt="" />
            <div class="inner">
              <p class="title">
                【爆款·领券减100】聚天鲜 （特大号）
                厄瓜多尔白虾南美大虾对虾2kg盒装 45-55只
              </p>
              <div class="tigong"><span>提供</span><i>15</i>份</div>
              <div class="baoming"><span>已有</span><i>1234</i>人报名</div>
              <p class="huodong">活动已结束</p>
              <div class="baojia">暂无报价</div>
              <div class="xiangqing">
                查看详情 <i class="el-icon-arrow-right"></i>
              </div>
            </div>
          </li>
          <li>
            <img src="/shichi/s3.jpg" alt="" />
            <div class="inner">
              <p class="title">
                【爆款·领券减100】聚天鲜 （特大号）
                厄瓜多尔白虾南美大虾对虾2kg盒装 45-55只
              </p>
              <div class="tigong"><span>提供</span><i>15</i>份</div>
              <div class="baoming"><span>已有</span><i>1234</i>人报名</div>
              <p class="huodong">活动已结束</p>
              <div class="baojia">暂无报价</div>
              <div class="xiangqing">
                查看详情 <i class="el-icon-arrow-right"></i>
              </div>
            </div>
          </li>
          <li>
            <img src="/shichi/s4.jpg" alt="" />
            <div class="inner">
              <p class="title">
                【爆款·领券减100】聚天鲜 （特大号）
                厄瓜多尔白虾南美大虾对虾2kg盒装 45-55只
              </p>
              <div class="tigong"><span>提供</span><i>15</i>份</div>
              <div class="baoming"><span>已有</span><i>1234</i>人报名</div>
              <p class="huodong">活动已结束</p>
              <div class="baojia">暂无报价</div>
              <div class="xiangqing">
                查看详情 <i class="el-icon-arrow-right"></i>
              </div>
            </div>
          </li>
          <li>
            <img src="/shichi/s5.jpg" alt="" />
            <div class="inner">
              <p class="title">
                【爆款·领券减100】聚天鲜 （特大号）
                厄瓜多尔白虾南美大虾对虾2kg盒装 45-55只
              </p>
              <div class="tigong"><span>提供</span><i>15</i>份</div>
              <div class="baoming"><span>已有</span><i>1234</i>人报名</div>
              <p class="huodong">活动已结束</p>
              <div class="baojia">暂无报价</div>
              <div class="xiangqing">
                查看详情 <i class="el-icon-arrow-right"></i>
              </div>
            </div>
          </li>
          <li>
            <img src="/shichi/s6.jpg" alt="" />
            <div class="inner">
              <p class="title">
                【爆款·领券减100】聚天鲜 （特大号）
                厄瓜多尔白虾南美大虾对虾2kg盒装 45-55只
              </p>
              <div class="tigong"><span>提供</span><i>15</i>份</div>
              <div class="baoming"><span>已有</span><i>1234</i>人报名</div>
              <p class="huodong">活动已结束</p>
              <div class="baojia">暂无报价</div>
              <div class="xiangqing">
                查看详情 <i class="el-icon-arrow-right"></i>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="tab-content2" v-show="selected == 1">
        <div class="tabBar2">
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
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Footer from "../components/Footer.vue";
export default {
  name: "Shichi",
  components: { Footer },
  props: [""],
  data() {
    return {
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
            name: "pinlun1",
            createTime: "123",
          },
          {
            url: "/shichi/pinglun/pl2.png",
            name: "pinlun1",
            createTime: "123",
          },
          {
            url: "/shichi/pinglun/pl3.png",
            name: "pinlun1",
            createTime: "123",
          },
          {
            url: "/shichi/pinglun/pl4.png",
            name: "pinlun1",
            createTime: "123",
          },
        ],
        [
          {
            url: "/shichi/pinglun/pl5.png",
            name: "pinlun1",
            createTime: "555",
          },
          {
            url: "/shichi/pinglun/pl6.png",
            name: "pinlun1",
            createTime: "666",
          },
          {
            url: "/shichi/pinglun/pl7.png",
            name: "pinlun1",
            createTime: "777",
          },
          {
            url: "/shichi/pinglun/pl8.png",
            name: "pinlun1",
            createTime: "888",
          },
        ],
        [
          {
            url: "/shichi/pinglun/pl9.png",
            name: "pinlun1",
            createTime: "555",
          },
          {
            url: "/shichi/pinglun/pl10.png",
            name: "pinlun1",
            createTime: "666",
          },
          {
            url: "/shichi/pinglun/pl11.png",
            name: "pinlun1",
            createTime: "777",
          },
          {
            url: "/shichi/pinglun/pl12.png",
            name: "pinlun1",
            createTime: "888",
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
    // this.getList();
  },
  methods: {
    
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