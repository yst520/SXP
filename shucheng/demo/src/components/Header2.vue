<template>
  <div id='header2'>
    <div class="logo">
      <img src="./img/logo.png" alt="">
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
      <router-link to="/gouwuche">购物车</router-link>
      <!-- <el-button type="danger" plain>购物车<i class="el-icon-shopping-cart-2"></i></el-button> -->
      <router-link to="/gouwuche">地址</router-link>
    </div>
  </div>
</template>
<script>
  export default {
    name:'Header2',
    components: {},
    props:[''],
    data () {
      return {
        input: ''
      };
    },
    created() {},
    methods: {},
  }
</script>
<style lang='sass'>
@import './scss/header2.scss'

</style>