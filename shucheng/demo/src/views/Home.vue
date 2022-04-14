<template>
  <div class="home">
    <Swiper />

    <Delicious />
    <Superior />
    <!-- <Recommended/> -->
  </div>
</template>

<script>
import Swiper from "../components/Swiper.vue";
import Recommended from "../components/Recommended.vue";
import Delicious from "../components/Delicious.vue";
import Superior from "../components/Superior.vue";

export default {
  name: "Home",
  components: {
    Swiper,
    Recommended,
    Delicious,
    Superior,
  },
  data() {
    return {
      listLoading: false,
      total: 0,
      listQuery: {
        page: 1,
        limit: 10,
        importance: undefined,
        title: undefined,
        type: undefined,
        sort: "+id",
      },
    };
  },
  created() {
    //  this.getList();
  },
  methods: {
    // 获取数据
    getList() {
     
    },
  },
};
</script>
<style>
* {
  padding: 0;
  margin: 0;
  font-size: 15px;
}
.container {
  width: 1200px;
  height: auto;
  margin: 0 auto;
  overflow: hidden;
}
li {
  list-style-type: none;
  /* float: left; */
}
.el-dropdown-menu__item{
  padding: 0 40px !important;
}
</style>
