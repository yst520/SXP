<template>
  <div id="swiper">
    <div class="container">
      <div class="lunbo">
        <el-carousel trigger="click" height="400px">
          <el-carousel-item v-for="(item,index) in lbImg" :key="index">
            <!-- <h3 class="small"> -->
              <div class="imgbox">
                <img :src="require('../static/'+item.src+'.jpg')" alt="">
                <!-- <div class="jianbian"></div> -->
              </div>
            <!-- </h3> -->
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="serves"></div>
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
      lbImg:[{src:'lb1'},{src:'lb2'},{src:'lb3'},{src:'lb4'}]
    };
  },
  created() {},
  methods: {},
};
</script>
<style lang='sass'>
@import './swiper.scss'
</style>