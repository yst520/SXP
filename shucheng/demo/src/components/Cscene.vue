<template>
  <div id="cscene">
    <div class="container">
      <div class="classify" @mouseover="classifyBtn=true" @mouseout="classifyBtn=false">
        <span>全部分类</span>
        <div class="classify-detail" v-show="classifyBtn">
          <ul>
            <li> <router-link to="/fruit">新鲜水果</router-link></li>
            <li><router-link to="/fruit">新鲜水果</router-link></li>
            <li><router-link to="/fruit">新鲜水果</router-link></li>
            <li><router-link to="/fruit">新鲜水果</router-link></li>
            <li><router-link to="/fruit">新鲜水果</router-link></li>
          </ul>
        </div>
      </div>
      <div class="scene-detail">
        <!-- <ul>
          <li>首页</li>
          <li>东家佳肴</li>
          <li>优选</li>
          <li>试吃</li>
        </ul> -->
        <router-link to="/">首页</router-link>
        <router-link to="/youxuan">优选</router-link>
        <router-link to="/jiayao">佳肴</router-link>
        <router-link to="/shichi">试吃</router-link>
      </div>
      <!-- 品质保障 -->
      <div class="pinzhi">
        <!-- <i class="iconfont icon-zuanshi"></i>

        <span>品质保障</span> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Cscene",
  components: {},
  props: [""],
  data() {
    return {
      classifyBtn:false,
    };
  },
  created() {},
  methods: {
 
  },
};
</script>
<style lang='sass' scoped>
@import './cscene.scss'
</style>