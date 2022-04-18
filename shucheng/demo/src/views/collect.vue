<template>
  <div id="collect">
    <Cscene />
    <div class="container">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">个人中心</el-breadcrumb-item>
        <el-breadcrumb-item>收藏夹</el-breadcrumb-item>
      </el-breadcrumb>
      <ul class="collectList">
        <li v-for="(item, index) in collectList" :key="index">
          <el-card>
            <div class="imgBox">
              <img :src="'fruit/' + item.img + '.jpg'" alt="" />
              <div class="msk">
                <span>进入店铺</span><span @click="handleDelete(item)"><i class="el-icon-delete"></i></span>
              </div>
            </div>
            <p class="describe">
              {{ item.describe }}
            </p>
            <span class="price">{{ item.price }}</span>
          </el-card>
        </li>
      </ul>
      
    </div>
    <pagination
        v-show="total > 0"
        :total="total"
        :page.sync="listQuery.page"
        :limit.sync="listQuery.pageSize"
        @pagination="getList"
      />
  </div>
</template>
<script>
import Pagination from "@/components/Pagination";
import { getCollectList,deleteCollect } from "@/api/collect";
import Cscene from "../components/Cscene.vue";
export default {
  name: "Collect",
  components: { Cscene,Pagination },
  props: [""],
  data() {
    return {
      total:0,
      activeName: "first",
      collectList: [
        // {
        //   img: "f1",
        //   decsribe: "",
        //   price: 33,
        //   dianpu:'',
        //   bianbao:''
        // },
      ],
      listQuery: {
        page: 1,
        pageSize: 12,
        sort: "+id",
        token: "",
      },
      total:0,
    };
  },
  created() {
    this.getList();
  },
  methods: {
    handleDelete(item) {
      this.$confirm("确定要删除该收藏夹吗", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          const userid = this.$store.getters.token;
          const bianhao = item.bianhao;
          deleteCollect({ userid, bianhao })
            .then(async (res) => {
              // this.$message({
              //   type: "success",
              //   message: res.msg,
              // });
              console.log(res)
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
    handleClick(tab, event) {
      console.log(tab, event);
    },
    getList() {
      this.listQuery.token = this.$store.getters.token;
      getCollectList(this.listQuery).then((response) => {
        // this.total = response.data.count;
        // this.collectList = response.data.list;
      });
    },
  },
};
</script>
<style lang='scss'>
@import "./scss/collect.scss";
</style>