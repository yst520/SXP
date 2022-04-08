<template>
  <div id="tejia">
    <div class="tj_header">
      <div class="fengding">
        <img src="/tejia/fd.png" alt="" />
        <div class="fengqing">
          <div>00疯抢</div>
          <div>22</div>
        </div>
      </div>
    </div>
    <div class="tj_bar">
      <div
        v-for="(item, index) in barList"
        :key="index"
        :class="selected == index ? 'barActive' : ''"
        @click="toggle(index)"
      >
        {{ item.text }}
      </div>
    </div>
    <div class="tj_body">
      <ul>
        <li v-for="(item, index) in tejiaList" :key="index">
          <div class="imgBox">
            <el-image :src="'/tejia/' + item.img + '.webp'" lazy></el-image>
          </div>
          <p>{{ item.describe }}</p>
          <div class="bottom">
            <span class="price">{{ item.price }}</span>
            <div class="qianggou">立即抢购</div>
          </div>
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
import { getTejiaList } from "@/api/goods";
export default {
  name: "Tejia",
  components: { Pagination },
  props: [""],
  data() {
    return {
      total: 0,
      tjList: [],
      selected: 0,
      barList: [{ text: "今日特价" }, { text: "明日预告" }],
      tejiaList: [
        {
          img: "tj1",
          describe: "1w23e3r4r",
          price: "33",
        },
      ],
      listQuery: {
        page: 1,
        pageSize: 20,
        sort: "+id",
      },
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      getTejiaList(this.listQuery).then((response) => {
        // console.log(response.data);
        this.tejiaList = response.data.list;
        this.total = response.data.count;
      });
    },
    toggle(index) {
      this.selected = index;
    },
  },
};
</script>
<style lang='scss' scoped>
@import "./scss/tejia.scss";
</style>