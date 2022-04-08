<template>
  <div id="dingdan">
    <div class="in-header">
      <div class="container">
        <img src="/logo2.png" alt="" />
        <!-- <span class="title">我的天鲜派</span> -->
        <router-link to="/" class="toHome">首页</router-link>
        <router-link to="/info" class="toInfo">个人中心</router-link>
        <el-button type="succcess" plain icon="el-icon-s-goods"
          >我的购物车</el-button
        >
        <el-input v-model="searchValue" placeholder="请输入内容"></el-input>
      </div>
    </div>
    <div class="container">
      <div class="in-main">
        <div class="left">
          <ul v-for="(items, clos) in list" :key="clos">
            <li
              v-for="item in items"
              :key="item"
              :class="item == '我的订单' ? 'active' : ''"
            >
              {{ item }}
            </li>
          </ul>
        </div>
        <div class="right">
          <div class="top">
            <h4>我的订单</h4>
          </div>
          <div class="bottom">
            <el-tabs v-model="activeName">
              <el-tab-pane label="全部订单" name="first">
                <div class="bar"><span>订单详情</span><span>数量</span><span>支付方式</span><span>金额</span><span>状态</span></div>
                <ul>
                  <li class="ddList" v-for="(item,index) in dingdanData" :key="index">
                    <div class="dd-header">
                      <span>2011-02-09</span><span>订单号:73478465</span><span>顺丰快递</span><span class="xiangqing">订单详情 ></span>
                    </div>
                    <div class="dd-body">
                      <a href="/">
                        <div class="imgBox">
                          <img src="/youxuan/yx1.webp" alt="" />
                        </div>
                        <div class="detail">
                          <p>
                            {{item.describe}}
                          </p>
                          <p><i class="el-icon-takeaway-box"></i>相似产品</p>
                        </div>
                      </a>
                      <div class="number">{{item.number}}</div>
                      <div>{{item.zhifu}}</div>
                      <div class="price">{{item.zhifu}}</div>
                      <div class="state">{{item.state}}</div>
                    </div>
                  </li>
                  <!-- <li class="ddList">
                    <div class="dd-header">
                      <span>2011-02-09</span><span>订单号:73478465</span><span>顺丰快递</span><span class="xiangqing">订单详情 ></span>
                    </div>
                    <div class="dd-body">
                      <a href="/">
                        <div class="imgBox">
                          <img src="/youxuan/yx1.webp" alt="" />
                        </div>
                        <div class="detail">
                          <p>
                            智利车厘子礼盒装大樱桃水果新鲜 尝鲜 J级(26-28mm)
                            125g
                          </p>
                          <p><i class="el-icon-takeaway-box"></i>相似产品</p>
                        </div>
                      </a>
                      <div class="number">1</div>
                      <div>微信</div>
                      <div class="price">108</div>
                      <div class="state">已取消</div>
                    </div>
                  </li>
                  <li class="ddList">
                    <div class="dd-header">
                      <span>2011-02-09</span><span>订单号:73478465</span><span>顺丰快递</span><span class="xiangqing">订单详情 ></span>
                    </div>
                    <div class="dd-body">
                      <a href="/">
                        <div class="imgBox">
                          <img src="/youxuan/yx1.webp" alt="" />
                        </div>
                        <div class="detail">
                          <p>
                            智利车厘子礼盒装大樱桃水果新鲜 尝鲜 J级(26-28mm)
                            125g
                          </p>
                          <p><i class="el-icon-takeaway-box"></i>相似产品</p>
                        </div>
                      </a>
                      <div class="number">1</div>
                      <div>微信</div>
                      <div class="price">108</div>
                      <div class="state">已取消</div>
                    </div>
                  </li> -->
                </ul>
                <!-- <el-table :data="dingdanData" stripe style="width: 100%">
                 
                  <el-table-column prop="bianhao" label="订单编号" width="120">
                  </el-table-column>
                  <el-table-column prop="time" label="提交时间" width="120">
                  </el-table-column>
                  <el-table-column prop="customer" label="顾客账号" width="120">
                  </el-table-column>
                  <el-table-column prop="price" label="价格" width="120">
                  </el-table-column>
                  <el-table-column prop="zhifu" label="支付方式" width="120">
                  </el-table-column>
                </el-table> -->
              </el-tab-pane>
              <el-tab-pane label="待付款" name="second">配置管理</el-tab-pane>
              <el-tab-pane label="待发货" name="third">角色管理</el-tab-pane>
              <el-tab-pane label="待收货" name="fourth"
                >定时任务补偿</el-tab-pane
              >
              <el-tab-pane label="已完成" name="fifth"
                >定时任务补偿</el-tab-pane
              >
            </el-tabs>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getDingdanList } from "@/api/dingdan";
export default {
  name: "Dingdan",
  components: {},
  props: [""],
  data() {
    return {
      activeName: "first",
      searchValue: "",
      list: [
        ["订单中心", "我的订单", "评价晒单"],
        ["我的钱包", "优惠券", "红包", "礼品卡"],
        ["我的关注", "关注商品"],
        ["我的活动", "我的预约", "我的拍卖", "我的回收单", "我的口令"],
        [
          "客户服务",
          "返修退换货",
          "价格保护",
          "我的发票",
          "咨询购买",
          "交易纠纷",
        ],
        ["特色服务", "我的营业厅", "医疗服务", "流量加油站"],
      ],
      listQuery: {
        page: 1,
        pageSize: 10,
        sort: "+id",
        token: "",
      },
      dingdanData: [],
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.listQuery.token = this.$store.getters.token;
      getDingdanList(this.listQuery).then((response) => {
        console.log(response.data.list);
        this.dingdanData = response.data.list;
      });
    },
  },
};
</script>
<style lang='scss' >
@import "./scss/dingdan.scss";
</style>