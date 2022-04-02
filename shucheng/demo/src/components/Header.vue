<template>
  <div id="header">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#e3e4e5"
      text-color="#666"
      active-text-color="#ed4b4b"
    >
      <el-menu-item index="1"><router-link to='/'>首页</router-link></el-menu-item>
      <el-menu-item index="2"><router-link to='/gouwuche'>购物车</router-link></el-menu-item>
      <el-menu-item index="3"><router-link to='/dingdan'>订单</router-link></el-menu-item>
      
      <el-submenu index="4">
        <template slot="title">我的会员</template>
        <el-menu-item index="4-1">选项1</el-menu-item>
      </el-submenu>
      <el-menu-item index="5"><router-link to="/login" target="_blank">登录/注册</router-link></el-menu-item>
    </el-menu>
    
  </div>
</template>
<script>
export default {
  name: "Header",
  components: {},
  props: [""],
  data() {
    return {
      activeIndex: "1",
    };
  },
  created() {},
  methods: {},
};
</script>
<style lang="scss">
@import './scss/header.scss'

</style>