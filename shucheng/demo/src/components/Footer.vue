<template>
  <div id='footer'>
    <div class="container">
      <ul class="f-top">
        <li>
          <i class="el-icon-circle-check"></i>
          <div>
            <p>食品安全</p>
            <p>精选生鲜 严格质检</p>
          </div>
        </li>
        <li>
          <i class="el-icon-circle-check"></i>
          <div>
            <p>全程冷链</p>
            <p>自营物流 安全可控</p>
          </div>
        </li>
        <li>
          <i class="el-icon-circle-check"></i>
          <div>
            <p>鲜活天然</p>
            <p>绿色生态 京东精选</p>
          </div>
        </li>
        <li>
          <i class="el-icon-circle-check"></i>
          <div>
            <p>产地直采</p>
            <p>限定产源 质量保证</p>
          </div>
        </li>
        <li>
          <i class="el-icon-circle-check"></i>
          <div>
            <p>无忧售后</p>
            <p>优鲜赔 售后通道</p>
          </div>
        </li>
       
      </ul>
      <ul class="f-bottom">
        <li v-for="(item,index) in footerList" :key="index"> 
          <p>{{item.text1}}</p>
          <a href="">{{item.text2}}</a>
          <a href="">{{item.text3}}</a>
          <a href="">{{item.text4}}</a>
        </li>
        
        
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name:'Footer',
    components: {},
    props:[''],
    data () {
      return {
        footerList:[
          {
            text1:'购物指南',
            text2:'购物流程',
            text3:'支付方式',
            text4:'售后规则'
          },{
            text1:'配送方式',
            text2:'配送运费',
            text3:'配送范围',
            text4:'配送时间'
          },{
            text1:'商家服务',
            text2:'配送范围',
            text3:'配送时间',
            text4:'联系我们'
          },{
            text1:'联系客服',
            text2:'客服电话 123456',
            text3:'服务时间 9:00-24:00',
            text4:'反馈邮箱 1723411234@qq.com'
          }
        ]
      };
    },
    created() {},
    methods: {},
  }
</script>
<style lang='sass' scoped>
@import './scss/footer.scss'
</style>