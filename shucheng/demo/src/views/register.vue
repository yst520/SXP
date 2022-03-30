<template>
  <div id="register">
    <div class="header">
      <img src="../assets/logo.png" alt="">
      <div class="icons">
        <i class="iconfont icon-zhengpin"></i><span>100%正品</span>
        <i class="iconfont icon-tuihuochuli"></i><span>7天放心退</span>
        <i class="iconfont icon-xianshiqianggou"></i><span>限时抢购</span>
      </div>
    </div>
    <div class="main">
      <img class="slogan" src="/bg/register-biaoyu.png" alt="">
      <img class="register-bg" src="/bg/login-bg.jpg" alt="">
      <div class="registerForm">
        <h2>欢迎注册！</h2>
        <input type="text" autofocus placeholder="请输入手机号">
        <input type="text" placeholder="请输入密码">
        <input type="text" placeholder="请再次输入密码">
        <input type="text" placeholder="请输入您的年龄">
        <div class="mima">
          <span>记住密码</span>
          <router-link to="/login">已有帐号,去登录</router-link>
        </div>
        <!-- <button>登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</button> -->
        <el-button type="success">登录</el-button>

      </div>
    </div>
    <div class="footer">
      <span>© 2020-2021　All rights reserved　上海千图网络有限公司　沪ICP备16057423号-2 </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "register",
  components: {},
  props: [""],
  data() {
    return {
      input1: "",
      input2: "",
      input3: "",
    };
  },
  created() {},
  methods: {},
};
</script>
<style lang='sass' scoped>
@import './scss/register.scss'
</style>