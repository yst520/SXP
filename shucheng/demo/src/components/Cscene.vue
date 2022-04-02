<template>
  <div id="cscene">
    <div class="container">
      <div class="classify">
      <!-- <div class="classify" @mouseover="classifyBtn=true" @mouseout="classifyBtn=false"> -->
        <span>全部分类</span>
        <!-- <div class="classify-detail" v-show="classifyBtn"> -->
        <div class="classify-detail">
          <ul>
            <li>
              <i class="item_icon1"></i>
              <router-link to="/fruit" target="_blank">新鲜水果</router-link>
              <div><span>草莓</span><span>水蜜桃</span><span>车厘子</span></div>
            </li>
            <li><i class="item_icon2"></i><router-link to="/fruit">海鲜水产</router-link>
            <div><span>海鲜礼盒</span><span>鱼类</span><span>贝类</span></div> </li>
            <li><i class="item_icon3"></i><router-link to="/fruit">精选肉类</router-link>
            <div><span>鸡翅</span><span>猪肋排</span><span>牛排</span></div></li>
            <li><i class="item_icon4"></i><router-link to="/fruit">冷冻饮食</router-link>
            <div><span>酸奶</span><span>冰淇淋</span><span>牛奶</span></div></li>
            <li><i class="item_icon5"></i><router-link to="/fruit">新鲜水果</router-link>
            <div><span>水培蔬菜</span><span>玉米</span><span>蛋品</span></div></li>
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
        <router-link to="/youxuan">优选推荐</router-link>
        <router-link to="/jiayao">当天特价</router-link>
        <router-link to="/shichi">鲜产试吃</router-link>
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
@import './scss/cscene.scss'
</style>