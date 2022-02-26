<template>
  <div id="fruit">
      <div class="options">
        <ul>
          <li>
            <h6>品牌：</h6>
            <span v-for="(item, index) in pinpaiData" :key="index">{{
              item.text
            }}</span>
            
          </li>
          <li>
            <h6>原产地：</h6>
            <span v-for="(item, index) in areaData" :key="index">{{
              item.text
            }}</span>
          </li>
          <li>
            <h6>品种：</h6>
            <span v-for="(item, index) in pinzhongData" :key="index">{{
              item.text
            }}</span>
          </li>
          <li>
            <h6>包装形式：</h6>
            <span v-for="(item, index) in baozhuangData" :key="index">{{
              item.text
            }}</span>
          </li>
           <li>
            <h6>其他选项：</h6>
            <span v-for="(item, index) in qitaData" :key="index">{{
              item.text
            }}</span>
          </li>
        </ul>
      </div>
      <!-- 排序bar -->
      <div class="sortingBar">
        <ul>
          <li
            v-for="(item, index) in sortingData"
            :key="index"
            @click="handleClick(index)"
            :class="activeItem == index ? 'active1' : ''"
          >
            {{ item.text }}
          </li>
          <!-- <li>销量</li> -->
        </ul>
        <div class="pagination">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400"
          >
          </el-pagination>
        </div>
      </div>
      <div class="goods">
        <ul>
          <li>
            <div class="goods_img">
              <img src="../static/pg1.jpg" alt="" />
            </div>
            <div class="goods_introduce">
              <button>热售</button>
              <h4>￥123</h4>
              <span class="zhe">4.4折</span>
              <div class="text">
                <p>
                  【JD物流】新疆阿克苏冰糖心苹果
                  春节日送礼年货节新鲜水果红富士时令丑苹果
                </p>
              </div>
              <div class="label"><span>关注</span><span>加入购物车</span></div>
            </div>
          </li>
          <li>
            <div class="goods_img">
              <img src="../static/pg2.jpg" alt="" />
            </div>
            <div class="goods_introduce">
              <button>热售</button>
              <h4>￥123</h4>
              <span>4.4折</span>
              <div class="text">
                <p>
                  【JD物流】新疆阿克苏冰糖心苹果
                  春节日送礼年货节新鲜水果红富士时令丑苹果
                </p>
              </div>
              <div class="label"><span>关注</span><span>加入购物车</span></div>
            </div>
          </li>
          <li>
            <div class="goods_img">
              <img src="../static/pg3.jpg" alt="" />
            </div>
            <div class="goods_introduce">
              <button>热售</button>
              <h4>￥123</h4>
              <span>4.4折</span>
              <div class="text">
                <p>
                  【JD物流】新疆阿克苏冰糖心苹果
                  春节日送礼年货节新鲜水果红富士时令丑苹果
                </p>
              </div>
              <div class="label"><span>关注</span><span>加入购物车</span></div>
            </div>
          </li>
          <li>
            <div class="goods_img">
              <img src="../static/pg4.jpg" alt="" />
            </div>
            <div class="goods_introduce">
              <button>热售</button>
              <h4>￥123</h4>
              <span>4.4折</span>
              <div class="text">
                <p>
                  【JD物流】新疆阿克苏冰糖心苹果
                  春节日送礼年货节新鲜水果红富士时令丑苹果
                </p>
              </div>
              <div class="label"><span>关注</span><span>加入购物车</span></div>
            </div>
          </li>
          <li>
            <div class="goods_img">
              <img src="../static/pg5.jpg" alt="" />
            </div>
            <div class="goods_introduce">
              <button>热售</button>
              <h4>￥123</h4>
              <span>4.4折</span>
              <div class="text">
                <p>
                  【JD物流】新疆阿克苏冰糖心苹果
                  春节日送礼年货节新鲜水果红富士时令丑苹果
                </p>
              </div>
              <div class="label"><span>关注</span><span>加入购物车</span></div>
            </div>
          </li>
          <li>
            <div class="goods_img">
              <img src="../static/pg6.jpg" alt="" />
            </div>
            <div class="goods_introduce">
              <button>热售</button>
              <h4>￥123</h4>
              <span>4.4折</span>
              <div class="text">
                <p>
                  【JD物流】新疆阿克苏冰糖心苹果
                  春节日送礼年货节新鲜水果红富士时令丑苹果
                </p>
              </div>
              <div class="label"><span>关注</span><span>加入购物车</span></div>
            </div>
          </li>
          <li>
            <div class="goods_img">
              <img src="../static/pg1.jpg" alt="" />
            </div>
            <div class="goods_introduce">
              <button>热售</button>
              <h4>￥123</h4>
              <span>4.4折</span>
              <div class="text">
                <p>
                  【JD物流】新疆阿克苏冰糖心苹果
                  春节日送礼年货节新鲜水果红富士时令丑苹果
                </p>
              </div>
              <div class="label"><span>关注</span><span>加入购物车</span></div>
            </div>
          </li>
          <li>
            <div class="goods_img">
              <img src="../static/pg1.jpg" alt="" />
            </div>
            <div class="goods_introduce">
              <button>热售</button>
              <h4>￥123</h4>
              <span>4.4折</span>
              <div class="text">
                <p>
                  【JD物流】新疆阿克苏冰糖心苹果
                  春节日送礼年货节新鲜水果红富士时令丑苹果
                </p>
              </div>
              <div class="label"><span>关注</span><span>加入购物车</span></div>
            </div>
          </li>
          <li>
            <div class="goods_img">
              <img src="../static/pg1.jpg" alt="" />
            </div>
            <div class="goods_introduce">
              <button>热售</button>
              <h4>￥123</h4>
              <span>4.4折</span>
              <div class="text">
                <p>
                  【JD物流】新疆阿克苏冰糖心苹果
                  春节日送礼年货节新鲜水果红富士时令丑苹果
                </p>
              </div>
              <div class="label"><span>关注</span><span>加入购物车</span></div>
            </div>
          </li>
        </ul>
      </div>
  </div>
</template>
<script>
export default {
  name: "Fruit",
  components: {},
  props: [""],
  data() {
    return {
      currentPage4: 4,
      activeItem: 0,
      pinpaiData:[{text:'农夫果园'},{text:'华味美'},{text:'良田记'},{text:'聚慧果园'},{text:'伊人一果'}],
      sortingData: [
        { text: "综合" },
        { text: "销量" },
        { text: "价格" },
        { text: "折扣" },
      ],
      areaData: [
        { text: "山东" },
        { text: "山西" },
        { text: "北京" },
        { text: "上海" },
        { text: "湖南" },
        { text: "广东" },
        { text: "广西" },
        { text: "湖北" },
        { text: "湖南" },
        { text: "新疆" },
      ],
      pinzhongData: [
        { text: "爱妃" },
        { text: "富士" },
        { text: "嘎啦/加力" },
        { text: "红玫瑰" },
        { text: "国光" },
        { text: "花牛" },
        { text: "王林" },
        { text: "黄元帅" },
        { text: "黄金维纳斯" },
        { text: "红蛇果" },
      ],
      baozhuangData:[{text:'简装礼盒'},{text:'精装礼盒'}],
      qitaData:[{text:'果实直径'},{text:'特产产品'},{text:'国产/进口'},{text:'阿克苏苹果单果果径'}]
    };
  },
  created() {},
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    handleClick(index) {
      this.activeItem = index;
      console.log((this.activeItem = index));
    },
  },
};
</script>
<style lang='sass' scoped>
@import './scss/fruit.scss'
</style>