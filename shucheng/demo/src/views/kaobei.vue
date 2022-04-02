<template>
  <div id="youxuan">
    <div class="y-main">
      <div class="lunbo-box">
        
        <div class="youxuan-title">
          <h2></h2>
          <p>/&nbsp;&nbsp; 精挑细选100分健康美味 &nbsp;&nbsp;/</p>
        </div>
        <ul class="iconBar">
          <li><i class="el-icon-fork-spoon"></i><span>精心挑选</span></li>
          <li><i class="el-icon-fork-spoon"></i><span>精心挑选</span></li>
          <li><i class="el-icon-fork-spoon"></i><span>精心挑选</span></li>
          <li><i class="el-icon-fork-spoon"></i><span>精心挑选</span></li>
          <li><i class="el-icon-fork-spoon"></i><span>精心挑选</span></li>
          <li><i class="el-icon-fork-spoon"></i><span>精心挑选</span></li>
        </ul>
        <div class="y-swiper">
          <el-carousel :interval="3000" type="card" height="400px">
            <el-carousel-item v-for="item in 6" :key="item">
              <h3 class="medium">{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>
        
      </div>
      <div class="lunbo-bg1"></div>
      <div class="lunbo-bg2"></div>
    </div>
   
  </div>
</template>
<script>
export default {
  name: "Youxuan",
  components: {},
  props: [""],
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>
<style lang='scss' scoped>
@import "./scss/youxuan.scss";
</style>