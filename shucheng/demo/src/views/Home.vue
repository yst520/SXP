<template>
  <div class="home">
    <Swiper/>
    
    <Delicious/>
    <Superior/>
    <!-- <Recommended/> -->
    
  </div>
</template>

<script>
import { getGoodsList } from "@/api/goods";
import Swiper from '../components/Swiper.vue'
import Recommended from '../components/Recommended.vue'
import Delicious from '../components/Delicious.vue'
import Superior from '../components/Superior.vue'

export default {

  name: 'Home',
  components: {
    Swiper,Recommended,
    Delicious,Superior
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
    }
  },
   created() {
     this.getList();
  },
  methods:{
    // 获取数据
    getList() {
      // this.listLoading = true;
      getGoodsList(this.listQuery).then((response) => {
        // this.total = response.data.total;
        console.log(response);
        if (response.code == 0) {
          this.$message({
            message: response.msg,
            type: "success",
          });
        }
        // Just to simulate the time of the request
        setTimeout(() => {
          // this.listLoading = false;
        }, 1.5 * 1000);
      });
    },
  }
}
</script>
<style>
*{
  padding: 0;
  margin: 0;
  font-size: 15px;
}
.container{
  width: 1200px;
  height: auto;
  margin:0 auto;
  overflow: hidden;
}
li{
  list-style-type: none;
  float: left;
}
</style>
