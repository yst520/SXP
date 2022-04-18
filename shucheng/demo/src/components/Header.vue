<template>
  <div id="header">
    <div class="container">
      <ul>
        <li>
          <router-link to="/"><i class="el-icon-s-home"></i> 首页</router-link>
        </li>
        <li class="user" v-show="denglu">
          <router-link to="/info">欢迎您！:{{ user }}用户</router-link>
        </li>
        <li v-show="!denglu">
          <router-link to="/login">登录/注册</router-link>
        </li>
        <li @click="toDianpu" v-show="dianzhu">
          <span>我的店铺</span>
        </li>
      </ul>
      <ul style="float:right">
        <li>
            <router-link to="/gouwuche" >购物车</router-link>
        </li>
        <li>
          <el-dropdown trigger="hover">
            <span class="el-dropdown-link">
              个人中心<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-user"
                ><router-link to="/info"
                  >个人主页</router-link
                ></el-dropdown-item
              >
              <el-dropdown-item icon="el-icon-setting"
                >账号设置</el-dropdown-item
              >
              <el-dropdown-item icon="el-icon-bell">我的消息</el-dropdown-item>
              <el-dropdown-item icon="el-icon-star-off"
                >我的收藏</el-dropdown-item
              >
              <el-dropdown-item icon="el-icon-switch-button"
                >退出登录</el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </li>
        <li>
         
            <router-link to="/info">我的会员</router-link>
        </li>

        <li>
          <router-link to="/dingdan">我的订单</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { getInfo } from "@/api/user";
export default {
  name: "Header",
  components: {},
  props: [""],
  data() {
    return {
      dianzhu:false,
      denglu: false,
      user: "",
      // loginText: "登录/注册",
      activeIndex: "1",
    };
  },
  computed: {
    loginText: function () {
      let result = "";
      if (this.$store.getters.token) {
        result = this.$store.getters.token;
      } else {
        result = "登录/注册";
      }
      console.log(this.$store.getters.username);
      return result;
    },
  },
  created() {
    this.getList();
  },
  methods: {
    toDianpu(){
      this.$router.push('/dianpu')
    },
    getList() {
      if (this.$store.getters.token) {
        this.denglu = true;
        getInfo(this.$store.getters.token).then((res) => {
          console.log(res.data);
          this.user = res.data.username;
          if(res.data.roles= 'editor'){
            this.dianzhu=true;
          }
        });
      } else {
        this.denglu = false;
      }
    },
  },
};
</script>
<style lang="scss">
@import "./scss/header3.scss";
</style>