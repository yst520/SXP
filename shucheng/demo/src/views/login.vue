<template>
  <div id="login">
    <img src="../static/bg/login-bg.jpg" alt="" />
    <div class="zhezhao">
      <div class="loginForm">
        <h2>登录</h2><br>
        <div class="tishi">请输入账号</div>
        <input type="text" />
        <div class="tishi">请输入密码</div>
        <input type="text"/>
        <!-- <div><input type="checkbox" name="" id=""></div> -->
        <button></button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  components: {},
  props: [""],
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>
<style lang='sass' scoped>
@import './scss/login.scss'
</style>