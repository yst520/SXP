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
      <img class="hua1" src="/dianpu/hua1.png" alt="" />
      <img class="hua2" src="/dianpu/hua2.png" alt="" />
      <h2>爱吃鱼官方旗舰店</h2>
    </div>
    <div class="sortingBar">
      <ul>
        <li
          v-for="(item, index) in sortList"
          :key="item"
          @click="change(index)"
          :class="selected == index ? 'Green' : 'li'"
        >
          {{ item }}
        </li>
      </ul>
      <div class="pagination">
        <pagination
          v-show="total > 0"
          :total="total"
          :page.sync="listQuery.page"
          :limit.sync="listQuery.pageSize"
          @pagination="getList"
        />
      </div>
    </div>
    <div class="dp-main">
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
          <li v-for="(item, index) in dianpuList" :key="index">
            <div class="imgBox">
              <img :src="'/goods/g' + item.id + '.jpg'" alt="" />
            </div>
            <h4 class="price">{{ item.price }}</h4>
            <p class="describe">{{ item.describe }}</p>
            <span class="pingjia">{{ item.pingjia }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Pagination from "@/components/Pagination";
import { getDianpuList } from "@/api/goods";
export default {
  name: "Dianpu",
  components: { Pagination },
  props: [""],
  data() {
    return {
      total: 0,
      dianpuList: [
        {
          id: "12",
          price: 89.0,
          describe:
            "爱吃鱼 儿童挪威真鳕鱼180g 去皮去骨小袋包赚 MSC认证 儿童挪威真鳕鱼6-10块/盒",
          pingjia: 7890,
        },
      ],
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
      sortList: ["上架时间", "销量", "价格", "好评度"],
      listQuery: {
        page: 1,
        pageSize: 12,
        sort: "+id",
        token: "",
      },
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.listQuery.token = this.$store.getters.token;
      getDianpuList(this.listQuery).then((res) => {
        this.total = res.data.count;
        console.log(res);
        this.dianpuList = res.data.list;
      });
    },
    change(index) {
      this.selected = index;
    },
  },
};
</script>
<style lang='scss'>
@import "./scss/dianpu.scss";
</style>