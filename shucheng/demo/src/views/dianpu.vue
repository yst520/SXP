<template>
  <div id="dianpu">
    <div class="dp-header">
      <div class="container">
        <img class="logo" src="../assets/logo.png" alt="" />
        <el-input placeholder="请输入内容" v-model="search">
          <template slot="append">店内搜索</template>
        </el-input>
        <el-button type="primry" plain
          ><i class="el-icon-s-goods"></i>购物车</el-button
        >
      </div>
    </div>
    <div class="detail-bar">
      <h4>爱吃鱼官方旗舰店</h4>
      <div class="pingfen">
        <el-rate
          v-model="value"
          disabled
          show-score
          text-color="#ff9900"
          score-template="{value}"
        >
        </el-rate>
      </div>
      <span><i class="el-icon-chat-dot-square"></i>联系客服</span>
      <span><i class="el-icon-star-off"></i>关注店铺</span>
      <span><i class="iconfont icon-zuanshi"></i>会员中心</span>
    </div>
    <div class="title-bar">
      <img class="hua1" src="/dianpu/hua1.png" alt="">
      <img class="hua2" src="/dianpu/hua2.png" alt="">
      <h2>爱吃鱼官方旗舰店</h2>
    </div>
    <div class="dp-main">
      <div class="sort">
        <span
          v-for="(item, index) in sortList"
          :key="index"
          :class="selected == index ? 'Green' : ''"
          @click="change(index)"
          >{{ item.text }}</span
        >
      </div>
      <div class="sideBar">
        <div class="side-top">
          <span>CLASSIFICATION</span>
          <h2>商品分类</h2>
        </div>
        <ul>
          <li v-for="(item, index) in sideList" :key="index">
            {{ item.text }}<i class="el-icon-arrow-down"></i>
          </li>
        </ul>
      </div>
      <div class="list">
        <ul>
          <li>
            
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Dianpu",
  components: {},
  props: [""],
  data() {
    return {
      sideList: [
        { text: "宝宝专享" },
        { text: "MSC认证" },
        { text: "经典国货" },
        { text: "经典礼盒" },
        { text: "进口产品" },
        { text: "活动专区" },
      ],
      selected: 0,
      search: "",
      value: 4.2,
      sortList: [
        { text: "上架时间" },
        { text: "销量" },
        { text: "价格" },
        { text: "好评度" },
      ],
    };
  },
  created() {},
  methods: {
    change(index) {
      this.selected = index;
    },
  },
};
</script>
<style lang='scss'>
@import "./scss/dianpu.scss";
</style>