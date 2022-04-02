<template>
  <div id="header2">
    <div class="logo">
      <img src="./img/logo.png" alt="" />
    </div>
    <div class="search">
      <el-input v-model="input" placeholder="开启美好生活！"></el-input>
      <div class="remen">
        <a href="">生鲜企采</a>
        <a href="">鸡蛋</a>
        <a href="">牛奶</a>
        <a href="">干果</a>
        <a href="">鲜肉</a>
      </div>
    </div>
    <div class="icons">
      <!-- <router-link to="/gouwuche"><i class="el-icon-goods"></i> 购物车</router-link> -->
      <el-badge :value="220" :max="99" class="item" >
        <el-button size="small" @click="toGouwuche">购物车</el-button>
      </el-badge>
      <el-badge :value="120" :max="99" class="item" >
        <el-button size="small" @click="toCollect">收藏夹</el-button>
      </el-badge>
      <!-- <el-button type="danger" plain>购物车<i class="el-icon-shopping-cart-2"></i></el-button> -->
      <!-- <router-link to="/gouwuche"
        ><i class="el-icon-star-off"></i> 收藏夹</router-link
      > -->
    </div>
  </div>
</template>
<script>
export default {
  name: "Header2",
  components: {},
  props: [""],
  data() {
    return {
      input: "",
    };
  },
  created() {},
  methods: {
    toGouwuche(){
      this.$router.push('/gouwuche')
    },
    toCollect(){
      this.$router.push('/collect')
    }
  },
};
</script>
<style lang='sass'>
@import './scss/header2.scss'
</style>