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
        <li>
          <router-link to="/dianpu">店铺</router-link>
        </li>
      </ul>
      <ul style="float:right">
        <li>
          <el-popover
            placement="bottom"
            title="标题"
            width="200"
            trigger="hover"
            content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
          >
            <router-link to="/gouwuche" slot="reference">购物车</router-link>
          </el-popover>
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
          <el-popover
            placement="bottom-start"
            title="标题"
            width="200"
            trigger="hover"
            content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
          >
            <router-link to="/info" slot="reference">我的会员</router-link>
          </el-popover>
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
    getList() {
      if (this.$store.getters.token) {
        this.denglu = true;
        getInfo(this.$store.getters.token).then((response) => {
          console.log(response.data);
          this.user = response.data.username;
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