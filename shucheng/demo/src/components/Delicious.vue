<template>
  <div id="Delicious">
    <div class="container">
      <div class="d-header">
        <div class="d-header-title">
          <h3>珍<i>/</i>馐<i>/</i>美<i>/</i>味</h3>
          <p>DELICIOUS</p>
        </div>
      </div>
      <div class="d-body">
        <div class="tab">
          <div class="tab-title">
            <ul>
              <li
                v-for="(item, index) in titleList"
                :key="index"
                @click="tabShow(index)"
              >
                {{ item.text }}
              </li>
            </ul>
          </div>
          <div class="tab-body">
            <div class="tab_content_title">
              <h1>精选礼盒</h1>
              <p>送礼送健康，精选生鲜礼盒</p>
              <img src="/home/delicious/tab1-left.png" alt="">
            </div>
            <div class="tab_content">
              <div class="prev" @click="prev"><i class="el-icon-arrow-left"></i></div>
              <div class="next" @click="next"><i class="el-icon-arrow-right"></i></div>
              <ul :style="'left:'+value1+'px;'">
                <li>
                  <img src="/home/delicious/d1.jpg" alt="" />
                  <p>顺丰空运 现摘巧克力奶油草莓3斤装 新鲜水果礼盒 京东生鲜</p>
                  <div class="content-bottom"><span class="price">45</span><span class="haoping">好评率98%</span></div>
                </li>
                <li>
                  <img src="/home/delicious/d1.jpg" alt="" />
                  <p>顺丰空运 现摘巧克力奶油草莓3斤装 新鲜水果礼盒 京东生鲜</p>
                  <div class="content-bottom"><span class="price">45</span><span class="haoping">好评率98%</span></div>
                </li>
                <li>
                  <img src="/home/delicious/d2.jpg" alt="" />
                  <p>顺丰空运 现摘巧克力奶油草莓3斤装 新鲜水果礼盒 京东生鲜</p>
                  <div class="content-bottom"><span class="price">45</span><span class="haoping">好评率98%</span></div>
                </li>
                <li>
                  <img src="/home/delicious/d3.jpg" alt="" />
                  <p>顺丰空运 现摘巧克力奶油草莓3斤装 新鲜水果礼盒 京东生鲜</p>
                  <div class="content-bottom"><span class="price">45</span><span class="haoping">好评率98%</span></div>
                </li>
                <li>
                  <img src="/home/delicious/d1.jpg" alt="" />
                  <p>顺丰空运 现摘巧克力奶油草莓3斤装 新鲜水果礼盒 京东生鲜</p>
                  <div class="content-bottom"><span class="price">45</span><span class="haoping">好评率98%</span></div>
                </li>
                <li>
                  <img src="/home/delicious/d4.jpg" alt="" />
                  <p>顺丰空运 现摘巧克力奶油草莓3斤装 新鲜水果礼盒 京东生鲜</p>
                  <div class="content-bottom"><span class="price">45</span><span class="haoping">好评率98%</span></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="tab-bg"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Delicious",
  components: {},
  props: [""],
  data() {
    return {
      value1:-198,
      titleList: [
        { text: "精选礼盒" },
        { text: "火锅诱惑" },
        { text: "深夜食堂" },
        { text: "进口美食" },
      ],
    };
  },
  created() {},
  methods: {
    tabShow(index) {
      console.log(index);
    },
    // 上一个
    prev(){
      this.value1-=198;
    },
    next(){
      this.value1+=198;
    }
  },
};
</script>
<style lang='scss' scoped>
@import "./scss/delicious.scss";
</style>