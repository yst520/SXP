<template>
  <div id="info">
    <div class="in-header">
      <div class="container">
        <img src="/logo2.png" alt="" />
        <span class="title">个人中心</span>
        <el-dropdown trigger="click">
          <span class="el-dropdown-link toHome">
            首页<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-plus">订单中心</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus"
              >我的钱包</el-dropdown-item
            >
            <el-dropdown-item icon="el-icon-circle-plus-outline"
              >我的关注</el-dropdown-item
            >
            <el-dropdown-item icon="el-icon-check">我的活动</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-check"
              >客户服务</el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown style="margin-left: 30px" trigger="click">
          <span class="el-dropdown-link toHome">
            用户设置<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-plus">授权管理</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus"
              >个人信息</el-dropdown-item
            >
            <el-dropdown-item icon="el-icon-circle-plus-outline"
              >账户安全</el-dropdown-item
            >
            <el-dropdown-item icon="el-icon-check">账号绑定</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-check"
              >收货地址</el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
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
            <li v-for="item in items" :key="item" @click="tiaozhuan(item)">{{ item }}</li>
          </ul>
        </div>
        <div class="right">
          <div class="top">
            <i class="el-icon-arrow-down" @click="show"></i>
            <h4>用户信息表</h4>
            <div v-show="describeBtn">
              <el-descriptions
                direction="vertical"
                :column="4"
                border
                size="small"
              >
                <el-descriptions-item label="用户名">{{
                  infoForm.username
                }}</el-descriptions-item>
                <el-descriptions-item label="手机号">{{
                  infoForm.phone
                }}</el-descriptions-item>
                <el-descriptions-item label="居住地" :span="2">{{
                  infoForm.juzhu
                }}</el-descriptions-item>
                <el-descriptions-item label="备注">
                  <el-tag size="small">{{ infoForm.beizhu }}</el-tag>
                </el-descriptions-item>
                <el-descriptions-item label="联系地址">{{
                  infoForm.address
                }}</el-descriptions-item>
              </el-descriptions>
              <el-button
                class="edit"
                type="primary"
                plain
                size="mini"
                @click="dialogVisible = true"
                >编辑</el-button
              >
            </div>
          </div>
          <div class="bottom">
            <el-tabs v-model="activeName">
              <el-tab-pane label="全部订单" name="first">用户管理</el-tab-pane>
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
    <el-dialog
      title="编辑用户信息"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <el-form ref="infoForm" :model="infoForm" label-width="80px">
        <el-form-item label="用户ID">
          <el-input v-model="infoForm.username"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="infoForm.phone"></el-input>
        </el-form-item>
        <el-form-item label="居住地">
          <el-input v-model="infoForm.juzhu"></el-input>
        </el-form-item>
        <el-form-item label="联系地址">
          <el-input v-model="infoForm.address"></el-input>
        </el-form-item>
        <el-form-item label="备注">
          <el-input v-model="infoForm.beizhu"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { getInfo } from "@/api/user";
export default {
  name: "Info",
  components: {},
  props: [""],
  data() {
    return {
      activeName: 'first',
      selected: -1,
      // tagList: [
      //   { text: "家", type: "success" },
      //   { text: "学校", type: "warning" },
      //   { text: "公司", type: "" },
      // ],

      infoForm: {
        username: "",
        phone: "",
        juzhu: "",
        address: "",
        beizhu: "",
      },
      dialogVisible: false,
      describeBtn: true,
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
    };
  },
  created() {
    this.getList();
  },
  methods: {
    tiaozhuan(item){
      console.log(item)
      if(item=='我的订单'){
        this.$router.push('/dingdan')
      }
    },
    getList() {
      getInfo(this.$store.getters.token).then((response) => {
        console.log(response.data);
        this.infoForm = response.data;
      });
    },
    select(index) {
      this.selected = index;
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    show() {
      this.describeBtn = !this.describeBtn;
    },
  },
};
</script>
<style lang='scss' >
@import "./scss/info.scss";
</style>