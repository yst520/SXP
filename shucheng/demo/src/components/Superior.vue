<template>
  <div id="superior">
    <!-- 优质果蔬 -->
    <div class="container">
      <div class="s-header">
        <div class="s-header-title">
          <h3>优<i>/</i>质<i>/</i>推<i>/</i>荐</h3>
          <p>DELICIOUS</p>
        </div>
      </div>
      <div class="s-body">
        <!-- 水果 -->
        <div class="fruit">
          <div class="superBox">
            <div class="left">
              <h4>新鲜水果</h4>
              <p>应时而采，新鲜特供</p>
              <div class="category-box">
                <a href="">车厘子</a>
                <a href="">猕猴桃</a>
                <a href="">进口水果</a>
                <a href="">橙子</a>
                <a href="">芒果</a>
                <a href="">苹果</a>
              </div>
              <div class="more">
                <span>更多水果</span><i class="el-icon-arrow-right"></i>
              </div>
            </div>
            <div class="center">
              <img src="/home/Superior/bg-center.jpg" alt="" />
            </div>
            <div class="right">
              <img src="/home/Superior/bg-right.png" alt="" />
            </div>
          </div>
          <div class="fruitList">
            <ul>
              <li v-for="(item, index) in fruitList" :key="index">
                <div class="imgBox">
                  <img :src="'/home/Superior/' + item.img + '.jpg'" alt="" />
                </div>
                <p>{{ item.describe }}</p>
                <span>{{ item.price }}</span>
              </li>
            </ul>
          </div>
        </div>
        <!-- 海鲜 -->
        <div class="seafood">
          <div class="superBox">
            <div class="left">
              <h4>海鲜水产</h4>
              <p>新鲜海货，即时享受</p>
              <div class="category-box">
                <a href="">海鲜礼盒</a>
                <a href="">虾类</a>
                <a href="">软足类</a>
                <a href="">鲜活</a>
                <a href="">海参</a>
                <a href="">扇贝</a>
              </div>
              <div class="more">
                <span>更多海鲜</span><i class="el-icon-arrow-right"></i>
              </div>
            </div>
            <div class="center">
              <img src="/home/Superior/bg-center2.png" alt="" />
            </div>
            <div class="right">
              <img src="/home/Superior/bg-right2.png" alt="" />
            </div>
          </div>
          <div class="fruitList">
            <ul>
              <li v-for="(item, index) in seafoodList" :key="index">
                <div class="imgBox">
                  <img :src="'/home/Superior/' + item.img + '.jpg'" alt="" />
                </div>
                <p>{{ item.describe }}</p>
                <span>{{ item.price }}</span>
              </li>
            </ul>
          </div>
        </div>
        <!-- 肉禽蛋品 -->
        <div class="meat">
          <div class="superBox">
            <div class="left">
              <h4>海鲜水产</h4>
              <p>新鲜海货，即时享受</p>
              <div class="category-box">
                <a href="">海鲜礼盒</a>
                <a href="">虾类</a>
                <a href="">软足类</a>
                <a href="">鲜活</a>
                <a href="">海参</a>
                <a href="">扇贝</a>
              </div>
              <div class="more">
                <span>更多海鲜</span><i class="el-icon-arrow-right"></i>
              </div>
            </div>
            <div class="center">
              <img src="/home/Superior/bg-center3.jpg" alt="" />
            </div>
            <div class="right">
              <img src="/home/Superior/bg-right3.png" alt="" />
            </div>
          </div>
          <div class="fruitList">
            <ul>
              <li v-for="(item, index) in meatList" :key="index">
                <div class="imgBox">
                  <img :src="'/home/Superior/' + item.img + '.jpg'" alt="" />
                </div>
                <p>{{ item.describe }}</p>
                <span>{{ item.price }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Superior",
  components: {},
  props: [""],
  data() {
    return {
      fruitList: [
        {
          img: "f1",
          describe: "越南进口白心火龙果4个装 标准果 单果400-550g",
          price: "62.00",
        },
        {
          img: "f2",
          describe: "越南进口白心火龙果4个装 标准果 单果400-550g",
          price: "62.00",
        },
        {
          img: "f3",
          describe: "越南进口白心火龙果4个装 标准果 单果400-550g",
          price: "62.00",
        },
        {
          img: "f4",
          describe: "越南进口白心火龙果4个装 标准果 单果400-550g",
          price: "62.00",
        },
        {
          img: "f5",
          describe: "越南进口白心火龙果4个装 标准果 单果400-550g",
          price: "62.00",
        },
        {
          img: "f6",
          describe: "越南进口白心火龙果4个装 标准果 单果400-550g",
          price: "62.00",
        },
        {
          img: "f1",
          describe: "越南进口白心火龙果4个装 标准果 单果400-550g",
          price: "62.00",
        },
        {
          img: "f2",
          describe: "越南进口白心火龙果4个装 标准果 单果400-550g",
          price: "62.00",
        },
        {
          img: "f3",
          describe: "越南进口白心火龙果4个装 标准果 单果400-550g",
          price: "62.00",
        },
        {
          img: "f4",
          describe: "越南进口白心火龙果4个装 标准果 单果400-550g",
          price: "62.00",
        },
        {
          img: "f5",
          describe: "越南进口白心火龙果4个装 标准果 单果400-550g",
          price: "62.00",
        },
        {
          img: "f6",
          describe: "越南进口白心火龙果4个装 标准果 单果400-550g",
          price: "62.00",
        },
      ],
      seafoodList: [
        {
          img: "s1",
          describe: "美威 智利原味三文鱼排 240g/袋 4片装 海鲜年货",
          price: "77.00",
        },
        {
          img: "s2",
          describe: "美威 智利原味三文鱼排 240g/袋 4片装 海鲜年货",
          price: "77.00",
        },
        {
          img: "s3",
          describe: "美威 智利原味三文鱼排 240g/袋 4片装 海鲜年货",
          price: "77.00",
        },
        {
          img: "s4",
          describe: "美威 智利原味三文鱼排 240g/袋 4片装 海鲜年货",
          price: "77.00",
        },
        {
          img: "s5",
          describe: "美威 智利原味三文鱼排 240g/袋 4片装 海鲜年货",
          price: "77.00",
        },
        {
          img: "s6",
          describe: "美威 智利原味三文鱼排 240g/袋 4片装 海鲜年货",
          price: "77.00",
        },
        {
          img: "s1",
          describe: "美威 智利原味三文鱼排 240g/袋 4片装 海鲜年货",
          price: "77.00",
        },
        {
          img: "s2",
          describe: "美威 智利原味三文鱼排 240g/袋 4片装 海鲜年货",
          price: "77.00",
        },
        {
          img: "s3",
          describe: "美威 智利原味三文鱼排 240g/袋 4片装 海鲜年货",
          price: "77.00",
        },
        {
          img: "s4",
          describe: "美威 智利原味三文鱼排 240g/袋 4片装 海鲜年货",
          price: "77.00",
        },
        {
          img: "s5",
          describe: "美威 智利原味三文鱼排 240g/袋 4片装 海鲜年货",
          price: "77.00",
        },
        {
          img: "s6",
          describe: "美威 智利原味三文鱼排 240g/袋 4片装 海鲜年货",
          price: "77.00",
        },
      ],
      meatList: [
        {
          img: "m1",
          describe: "和路雪 可爱多甜筒 非常巧克力口味 冰淇淋家庭",
          price: "43.00",
        },{
          img: "m2",
          describe: "和路雪 可爱多甜筒 非常巧克力口味 冰淇淋家庭",
          price: "43.00",
        },{
          img: "m3",
          describe: "和路雪 可爱多甜筒 非常巧克力口味 冰淇淋家庭",
          price: "43.00",
        },{
          img: "m4",
          describe: "和路雪 可爱多甜筒 非常巧克力口味 冰淇淋家庭",
          price: "43.00",
        },{
          img: "m5",
          describe: "和路雪 可爱多甜筒 非常巧克力口味 冰淇淋家庭",
          price: "43.00",
        },{
          img: "m6",
          describe: "和路雪 可爱多甜筒 非常巧克力口味 冰淇淋家庭",
          price: "43.00",
        },
      ],
    };
  },
  created() {},
  methods: {},
};
</script>
<style lang='scss' scoped>
@import "./scss/superior.scss";
</style>