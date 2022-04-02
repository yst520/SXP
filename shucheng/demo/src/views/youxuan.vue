<template>
  <div id="youxuan">
    <div class="header-box">
      <div class="lunbo-box">
        <div class="youxuan-title">
          <h2></h2>
          <p>/&nbsp;&nbsp; 精挑细选100分健康美味 &nbsp;&nbsp;/</p>
        </div>
        <ul class="iconBar">
          <li><i class="el-icon-fork-spoon"></i><span>精心挑选</span></li>
          <li><i class="el-icon-fork-spoon"></i><span>精心挑选</span></li>
          <li><i class="el-icon-fork-spoon"></i><span>精心挑选</span></li>
          <li><i class="el-icon-fork-spoon"></i><span>精心挑选</span></li>
          <li><i class="el-icon-fork-spoon"></i><span>精心挑选</span></li>
          <li><i class="el-icon-fork-spoon"></i><span>精心挑选</span></li>
        </ul>
        <div class="y-swiper">
          <el-carousel :interval="3000" type="card" height="400px">
            <el-carousel-item v-for="(item,index) in lunboList" :key="index">
              <img :src="'/youxuan/'+item.img+'.jpg'" alt="">
              <!-- <img src="/youxuan/youxuan1.jpg" alt=""> -->
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="lunbo-bg1"></div>
        <div class="lunbo-bg2"></div>
      </div>
    </div>
    <div class="container">
      <!-- <div class="bg1"></div> -->
      <div class="d-header">
        <div class="d-header-title">
          <h3>优<i>/</i>品<i>/</i>合<i>/</i>集</h3>
          <p>PERFECT</p>
        </div>
      </div>
      <ul class="youpinList">
        <li v-for="(item,index) in youpinList" :key="index">
          <el-card>
            <p class="y-title"><span>优选卖点：</span><span>{{item.maidian}}</span></p>
            <div class="imgBox"><img :src="'/youxuan/'+item.img+'.webp'" alt="" /></div>
            <p class="describe">{{item.describe}}</p>
            <p class="price">{{item.price}}</p>
          </el-card>
        </li>
        
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "Youxuan",
  components: {},
  props: [""],
  data() {
    return {
      lunboList:[
        {img:'youxuan1'},{img:'youxuan2'},{img:'youxuan3'}
      ],
      youpinList:[
        {
          maidian:'真鳕鱼低脂肪高蛋白宝宝辅食',
          img:'yx1',
          describe:'Zespri佳沛 新西兰阳光金奇异果 16个礼盒装 经典36号果 单果重约90-100g 新鲜水果礼盒',
          price:'88.99'
        },{
          maidian:'真鳕鱼低脂肪高蛋白宝宝辅食',
          img:'yx2',
          describe:'展卉 泰国椰青 9个装 单果约800g以上 赠送开椰器和吸管 新鲜水果',
          price:'88.99'
        },{
          maidian:'真鳕鱼低脂肪高蛋白宝宝辅食',
          img:'yx3',
          describe:'烟台红富士苹果 5kg 一级铂金果 果径约80mm 自营水果',
          price:'88.99'
        },{
          maidian:'真鳕鱼低脂肪高蛋白宝宝辅食',
          img:'yx4',
          describe:'泰国进口龙眼 精选一级果1kg装 新鲜水果',
          price:'88.99'
        },{
          maidian:'真鳕鱼低脂肪高蛋白宝宝辅食',
          img:'yx5',
          describe:'爱吃鱼挪威北极鳕鱼500g/盒',
          price:'88.99'
        },{
          maidian:'真鳕鱼低脂肪高蛋白宝宝辅食',
          img:'yx6',
          describe:'爱吃鱼挪威北极鳕鱼500g/盒',
          price:'88.99'
        },{
          maidian:'真鳕鱼低脂肪高蛋白宝宝辅食',
          img:'yx7',
          describe:'爱吃鱼挪威北极鳕鱼500g/盒',
          price:'88.99'
        },{
          maidian:'真鳕鱼低脂肪高蛋白宝宝辅食',
          img:'yx8',
          describe:'爱吃鱼挪威北极鳕鱼500g/盒',
          price:'88.99'
        },{
          maidian:'真鳕鱼低脂肪高蛋白宝宝辅食',
          img:'yx9',
          describe:'爱吃鱼挪威北极鳕鱼500g/盒',
          price:'88.99'
        },{
          maidian:'真鳕鱼低脂肪高蛋白宝宝辅食',
          img:'yx10',
          describe:'爱吃鱼挪威北极鳕鱼500g/盒',
          price:'88.99'
        },{
          maidian:'真鳕鱼低脂肪高蛋白宝宝辅食',
          img:'yx11',
          describe:'爱吃鱼挪威北极鳕鱼500g/盒',
          price:'88.99'
        },{
          maidian:'真鳕鱼低脂肪高蛋白宝宝辅食',
          img:'yx12',
          describe:'爱吃鱼挪威北极鳕鱼500g/盒',
          price:'88.99'
        },
        
      ]
    };
  },
  created() {},
  methods: {},
};
</script>
<style lang='scss' scoped>
@import "./scss/youxuan.scss";
</style>