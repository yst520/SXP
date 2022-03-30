<template>
  <div id="swiper">
    <div class="container">
      <div class="lunbo">
        <el-carousel trigger="click" height="400px">
          <el-carousel-item v-for="(item, index) in lbImg" :key="index">
            <!-- <h3 class="small"> -->
            <div class="imgbox">
              <img :src="require('../static/' + item.src + '.jpg')" alt="" />
              <!-- <div class="jianbian"></div> -->
            </div>
            <!-- </h3> -->
          </el-carousel-item>
        </el-carousel>
        <div class="left-bottom-guo"></div>
      </div>
      <div class="swiper-bg-bottom"></div>
      <div class="serves">
        <ul>
          <li>
            <div class="serves_inner">
              <p>食品安全</p>
              <p>精选生鲜 严格质检</p>
            </div>
          </li>
          <li>
            <div class="serves_inner">
              <p>全程冷链</p>
              <p>自营物流 安全可控</p>
            </div>
          </li>
          <li>
            <div class="serves_inner">
              <p>鲜活天然</p>
              <p>绿色生态 京东精选</p>
            </div>
          </li>
          <li>
            <div class="serves_inner">
              <p>产地直采</p>
              <p>限定产源 质量保证</p>
            </div>
          </li>
          <li>
            <div class="serves_inner">
              <p>无忧售后</p>
              <p>优鲜赔 售后通道</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Swiper",
  components: {},
  props: [""],
  data() {
    return {
      lbImg: [{ src: "lb1" }, { src: "lb2" }, { src: "lb3" }, { src: "lb4" }],
    };
  },
  created() {},
  methods: {},
};
</script>
<style lang='sass'>
@import './scss/swiper.scss'
</style>