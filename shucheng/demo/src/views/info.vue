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
          ><router-link to="/gouwuche">我的购物车</router-link></el-button
        >
        <el-input v-model="searchValue" placeholder="请输入内容"></el-input>
      </div>
    </div>
    <div class="container">
      <div class="in-main">
        <div class="left">
          <ul v-for="(items, clos) in list" :key="clos">
            <li v-for="item in items" :key="item" @click="tiaozhuan(item)">
              {{ item }}
            </li>
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
                @click="editUser"
                >编辑</el-button
              >
            </div>
          </div>
          <div class="bottom">
            <span
              v-for="(item, index) in attentionList"
              :key="index"
              :class="value1 == index ? 'b-Green' : ''"
              @click="Title(index)"
              >{{ item.text }}</span
            >
            <div class="attentionList">
              <el-empty v-show="empty" :description="description"></el-empty>
              <ul>
                <li>
                  <div class="content" @click="createCollect">
                    <i class="el-icon-circle-plus-outline"></i>
                    <p>创建收藏夹</p>
                  </div>
                </li>
                <li v-for="(item, index) in favoritesList" :key="index">
                  <div class="imgBox" @click="toCollect">
                    <div class="box-cover"></div>
                    <img :src="'/info/fm' + item.img + '.png'" alt="" />
                  </div>
                  <p class="name">{{ item.name }}</p>
                  <p class="describe">{{ item.describe }}</p>
                  <el-tag style="margin-right: 10px" @click="handleEdit(item)"
                    >编辑</el-tag
                  >
                  <el-tag type="danger" @click="handleDelete(item)"
                    >删除</el-tag
                  >
                </li>
              </ul>
              <ul></ul>
            </div>
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
        <el-button type="primary"  @click="editSubmit"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <!-- 收藏夹 -->
    <el-dialog
      class="favorites"
      :title="createText"
      :visible.sync="createBtn"
      width="50%"
      :before-close="handleClose"
    >
      <el-form ref="collectForm" :model="collectForm" label-width="120px">
        <el-form-item label="名称">
          <el-input v-model="collectForm.name"></el-input>
        </el-form-item>
        <el-form-item label="描述">
          <el-input v-model="collectForm.describe"></el-input>
        </el-form-item>
        <el-form-item label="封面预览图:">
          <div class="fengmian">
            <img :src="'/info/fm' + collectForm.img + '.png'" alt="" />
            <div class="msk"><i class="el-icon-picture-outline"></i></div>
            <el-tag type="info" @click="change"
              ><i class="el-icon-refresh"></i>换一换</el-tag
            >
          </div>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="success" plain @click="quxiao">取 消</el-button>
        <el-button type="success" @click="handleInsertAndEdit">{{
          createText
        }}</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import {
  
  getFavoritesList,
  insertFavorites,
  deleteFavorites,
  updateFavorites,
  updateInfo
} from "@/api/goods";
import {getCollectList} from '@/api/collect';
import { getInfo } from "@/api/user";
export default {
  name: "Info",
  components: {},
  props: [""],
  data() {
    return {
      createText: "",
      favoritesList: [],
      collectForm: {
        userid: "",
        name: "",
        describe: "",
        img: "",
      },
      collectName: "",
      description: "请进行登录注册",
      empty: false,
      value1: 0,
      attentionList: [
        { text: "收藏夹" },
        { text: "关注店铺" },
        { text: "足迹" },
      ],
      activeName: "first",
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
      createBtn: false,
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
      listQuery: {
        page: 1,
        pageSize: 10,
        sort: "+id",
        token: "",
      },
    };
  },

  created() {
    this.getList();
  },
  methods: {
    //编辑用户信息
    editUser() {
      this.dialogVisible=true;
    },
    editSubmit(){
      updateInfo(this.infoForm)
        .then((res) => {
          console.log(res);
          this.$message({
            message: res.msg,
            type: "success",
          });
          this.getList();
        })
        .catch((err) => {
          console.log(err);
        });
        this.dialogVisible=false;
    },
    //取消
    quxiao() {
      this.createBtn = false;
      this.getList();
    },
    //编辑收藏夹
    handleEdit(item) {
      this.createBtn = true;
      this.collectForm = item;
      this.createText = "编辑收藏夹";
    },
    //带参数跳转到收藏页面
    toCollect() {
      this.$router.push("/collect");
    },
    handleDelete(item) {
      this.$confirm("确定要删除该收藏夹吗", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          const name = item.name;
          const userid = this.$store.getters.token;
          deleteFavorites({ name, userid })
            .then(async (res) => {
              this.$message({
                type: "success",
                message: res.msg,
              });
              this.getList();
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    handleInsertAndEdit() {
      if (this.createText == "创建收藏夹") {
        this.collectForm.userid = this.$store.getters.token;
        insertFavorites(this.collectForm)
          .then((res) => {
            if (res.code == 0) {
              this.$message({
                message: res.msg,
                type: "success",
              });
            }
            this.getList();
          })
          .catch((err) => {
            console.log(err);
          });
      } else if (this.createText == "编辑收藏夹") {
        updateFavorites(this.collectForm)
          .then((res) => {
            console.log(res);
            this.$message({
              message: res.msg,
              type: "success",
            });
            this.getList();
          })
          .catch((err) => {
            console.log(err);
          });
      }
      this.createBtn = false;
    },
    createCollect() {
      this.collectForm = {};
      this.createBtn = true;
      this.change();
      //创建收藏夹
      this.createText = "创建收藏夹";
    },
    change() {
      this.collectForm.img = Math.floor(Math.random() * 10) + 1;
    },
    Title(index) {
      this.value1 = index;
    },
    tiaozhuan(item) {
      if (item == "我的订单") {
        this.$router.push("/dingdan");
      }
    },
    getList() {
      if (this.$store.getters.token) {
        getInfo(this.$store.getters.token).then((response) => {
          this.infoForm = response.data;
        });
        this.listQuery.token = this.$store.getters.token;
        getCollectList(this.listQuery).then((response) => {
          if (response.data.count == 0) {
            this.description = "您还没有收藏哦，赶快去收藏喜欢的商品吧~";
          }
          this.collectList = response.data.list;
        });
        getFavoritesList(this.listQuery).then((response) => {
          this.favoritesList = response.data.list;
        });
      } else {
        this.empty = true;
        console.log("没有登陆注册");
      }
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