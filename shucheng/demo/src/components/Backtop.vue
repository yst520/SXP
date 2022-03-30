<template>
  <div id="backtop">
    <ul>
      <li><i class="iconfont icon-zuji" @click="drawerOpen"></i></li>
      <li><i class="iconfont icon-qiandao"></i></li>
      <!-- <li><i class="iconfont icon-kefu" @click="toKefu"></i></li> -->
      <li><router-link to="/kefu" target="_blank"><i class="iconfont icon-kefu" ></i></router-link></li>
      <li>
        <i style="font-size: 26px" class="iconfont icon-huidaodingbu"></i>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Backtop",
  components: {},
  props: [""],
  data() {
    return {
      Message: true,
    };
  },
  created() {},
  methods: {
    drawerOpen() {
      // 触发，将数据存放到store中去
      this.$store.commit("receiveMsg", {
        Msg: this.Message,
      });
    },
  },
};
</script>
<style lang='sass' scoped>
@import './scss/backtop.scss'
</style>