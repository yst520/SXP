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
      <el-submenu index="1">
        <template slot="title">首页</template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">111</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">登录/注册</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">我的订单</template>
        <el-menu-item index="3-1">选项1</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">我的会员</template>
        <el-menu-item index="4-1">选项1</el-menu-item>
      </el-submenu>

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
<style>
@import url('./header.css');

</style>