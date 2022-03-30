<template>
  <div id="shichi">
    <div class="lunbo">
      <img src="/shichi/shichi.jpg" alt="" />
    </div>
    <div class="container">
      <div class="tabBar">
        <ul>
          <li
            v-for="(item, index) in tabText"
            :key="index"
            @click="toggle(index)"
            :class="selected == index ? 'Green' : ''"
          >
            {{ item.text }}
          </li>
        </ul>
      </div>
      <div class="tab-content1" v-show="selected == 0">
        <ul>
          <li>
            <img src="/shichi/s1.jpg" alt="" />
            <div class="inner">
              <p class="title">
                【爆款·领券减100】聚天鲜 （特大号）
                厄瓜多尔白虾南美大虾对虾2kg盒装 45-55只
              </p>
              <div class="tigong"><span>提供</span><i>15</i>份</div>
              <div class="baoming"><span>已有</span><i>1234</i>人报名</div>
              <p class="huodong">活动已结束</p>
              <div class="baojia">暂无报价</div>
              <div class="xiangqing">查看详情 <i class="el-icon-arrow-right"></i></div>
            </div>
          </li>
          <li>
            <img src="/shichi/s2.jpg" alt="" />
            <div class="inner">
              <p class="title">
                【爆款·领券减100】聚天鲜 （特大号）
                厄瓜多尔白虾南美大虾对虾2kg盒装 45-55只
              </p>
              <div class="tigong"><span>提供</span><i>15</i>份</div>
              <div class="baoming"><span>已有</span><i>1234</i>人报名</div>
              <p class="huodong">活动已结束</p>
              <div class="baojia">暂无报价</div>
              <div class="xiangqing">查看详情 <i class="el-icon-arrow-right"></i></div>
            </div>
          </li>
          <li>
            <img src="/shichi/s3.jpg" alt="" />
            <div class="inner">
              <p class="title">
                【爆款·领券减100】聚天鲜 （特大号）
                厄瓜多尔白虾南美大虾对虾2kg盒装 45-55只
              </p>
              <div class="tigong"><span>提供</span><i>15</i>份</div>
              <div class="baoming"><span>已有</span><i>1234</i>人报名</div>
              <p class="huodong">活动已结束</p>
              <div class="baojia">暂无报价</div>
              <div class="xiangqing">查看详情 <i class="el-icon-arrow-right"></i></div>
            </div>
          </li>
          <li>
            <img src="/shichi/s4.jpg" alt="" />
            <div class="inner">
              <p class="title">
                【爆款·领券减100】聚天鲜 （特大号）
                厄瓜多尔白虾南美大虾对虾2kg盒装 45-55只
              </p>
              <div class="tigong"><span>提供</span><i>15</i>份</div>
              <div class="baoming"><span>已有</span><i>1234</i>人报名</div>
              <p class="huodong">活动已结束</p>
              <div class="baojia">暂无报价</div>
              <div class="xiangqing">查看详情 <i class="el-icon-arrow-right"></i></div>
            </div>
          </li>
          <li>
            <img src="/shichi/s5.jpg" alt="" />
            <div class="inner">
              <p class="title">
                【爆款·领券减100】聚天鲜 （特大号）
                厄瓜多尔白虾南美大虾对虾2kg盒装 45-55只
              </p>
              <div class="tigong"><span>提供</span><i>15</i>份</div>
              <div class="baoming"><span>已有</span><i>1234</i>人报名</div>
              <p class="huodong">活动已结束</p>
              <div class="baojia">暂无报价</div>
              <div class="xiangqing">查看详情 <i class="el-icon-arrow-right"></i></div>
            </div>
          </li>
          <li>
            <img src="/shichi/s6.jpg" alt="" />
            <div class="inner">
              <p class="title">
                【爆款·领券减100】聚天鲜 （特大号）
                厄瓜多尔白虾南美大虾对虾2kg盒装 45-55只
              </p>
              <div class="tigong"><span>提供</span><i>15</i>份</div>
              <div class="baoming"><span>已有</span><i>1234</i>人报名</div>
              <p class="huodong">活动已结束</p>
              <div class="baojia">暂无报价</div>
              <div class="xiangqing">查看详情 <i class="el-icon-arrow-right"></i></div>
            </div>
          </li>
          
        </ul>
      </div>
      <div class="tab-content2" v-show="selected == 1">
        <div class="tabBar2">
          <ul>
            <li v-for="(item,index) in barList" :key="index" :class="index==selected2?'borderGreen':''" @click="toggle2(index)"><i :class="item.class"></i><span>{{item.text}}</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Footer from "../components/Footer.vue";
export default {
  name: "Shichi",
  components: { Footer },
  props: [""],
  data() {
    return {
      selected2:0,
      selected: 1,
      tabText: [
        {
          
          text: "本期试吃",
        },
        {
          text: "试吃报告",
        },
      ],
      barList:[
        {text:'全部',class:'icon1',},{text:'新鲜水果',class:'icon2',},
        {text:'海鲜水产',class:'icon3',},{text:'肉禽蛋品',class:'icon4',},
        {text:'冷冻速食',class:'icon5',}
      ]
    };
  },
  created() {},
  methods: {
    toggle(index) {
      this.selected = index;
    },
     toggle2(index) {
      this.selected2 = index;
    },
  },
};
</script>
<style lang='scss' scoped>
@import "./scss/shichi.scss";
</style>