<template>
  <div id="login">
    <img src="/bg/login-bg.jpg" alt="" />
    <div class="zhezhao">
      <div class="loginForm">
        <img class="logoImg" src="/logo2.png" alt="" />
        <h2>天鲜派账号登录</h2>
        <div class="content">
          <el-form
            :model="loginForm"
            :rules="rules"
            ref="loginForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="账号" prop="username">
              <el-input v-model="loginForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input type="password" v-model="loginForm.password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" :loading="loading" @click="handleLogin('loginForm')"
                >立即登录</el-button
              ><br />
              <el-button @click="resetForm('loginForm')">重置</el-button>
            </el-form-item>
          </el-form>
          <!-- <el-input
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
          </el-input> -->
          <!-- <div class="yzm"></div> -->
          <!-- <el-button type="primary">确认</el-button><br /> -->
          <!-- <el-button type="success">重置</el-button> -->
          <!-- <el-checkbox label="记住密码" name="type" checked></el-checkbox> -->
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
      loading:false,
      loginForm: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入账号", trigger: "blur" },
          { min: 6, max: 12, message: "长度在 6 到 12个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 12, message: "长度在 6 到 12个字符", trigger: "blur" },
        ],
      },
    };
  },
  created() {},
  methods: {
    handleLogin(loginForm) {
       this.$refs[loginForm].validate((valid) => {
        if (valid) {
          this.loading = true;
          this.$store.dispatch('user/login', this.loginForm)
            .then(() => {
              this.$store.dispatch('user/getInfo')
              this.$router.push({ path: this.redirect || '/', query: this.otherQuery })
              this.loading = false
            })
            .catch(() => {
              this.loading = false
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    submitForm(loginForm) {
      this.$refs[loginForm].validate((valid) => {
        if (valid) {//与prop绑定的值呼应
          this.$message({
            message: "登录成功！",
            type: "success",
          });
          this.$router.push('/')
        } else {
          console.log("登陆失败");
          return false;
        }
      });
    },
    resetForm(loginForm) {
      this.$refs[loginForm].resetFields();
    },
  },
};
</script>
<style lang='sass' scoped>
@import './scss/login.scss'
</style>