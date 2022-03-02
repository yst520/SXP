<template>
  <div id="login">
    <img src="../static/bg/login-bg.jpg" alt="" />
    <div class="zhezhao">
      <div class="loginForm">
        <img class="logoImg" src="../static/logo2.png" alt="" />
        <h2>天鲜派账号登录</h2>
        <div class="content">
          <el-input
            placeholder="请输入账号"
            suffix-icon="el-icon-user-solid"
            v-model="input1"
          >
          </el-input>
          <el-input
            placeholder="请输入密码"
            suffix-icon="el-icon-view"
            v-model="input2"
          >
          </el-input>
          <el-input
            placeholder="验证码"
            v-model="input3"
            style="width:220px;"
          >
          </el-input>
          <!-- <div class="yzm"></div> -->
          <el-button type="primary">确认</el-button><br>
          <el-button type="success">重置</el-button>
          <el-checkbox label="记住密码" name="type" checked></el-checkbox>
          <div class="other">
            <router-link to="/register">去注册</router-link>
            <router-link to="/register">忘记密码？</router-link>
          </div>
        </div>
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
    return {
      input1:'',
      input2:'',
      input3:''
    };
  },
  created() {},
  methods: {},
};
</script>
<style lang='sass' scoped>
@import './scss/login.scss'
</style>