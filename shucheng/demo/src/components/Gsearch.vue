<template>
<!-- 购物车的搜索栏 -->
  <div id='Gsearch'>
    <div class="container">
        <div class="g-left">
            <img src="./img/logo.png" alt="">
        </div>
        <div class="g-right">
            <input type="text"><div class="searchBtn">搜索</div>
        </div>
    </div>
  </div>
</template>
<script>
  export default {
    name:'Gsearch',
    components: {},
    props:[''],
    data () {
      return {

      };
    },
    created() {},
    methods: {},
  }
</script>
<style lang='scss'>
#Gsearch{
    width: 100%;
    height: 128px;
    margin-top: 20px;
    margin-bottom: 20px;
    .container{
        overflow: hidden;
        .g-left{
            float: left;
            width: 220px;
            height: 180px;
            overflow: hidden;
            img{
                width: 100%;
                height: auto;
            }
        }
        .g-right{
            float: right;
            width: 470px;
            height: 36%;
            margin-top: 30px;
            input{
                width: 400px;
                height: 36px;
                outline: none;
                box-sizing: border-box;
                padding-left: 20px;
                font-size: 16px;
                border:2px solid #06b077;

            }
            .searchBtn{
                float: right;
                height: 36px;
                line-height: 36px;
                width: 70px;
                color: #fff;
                font-weight: 700;
                outline: none;
                border:none;
                background-color: #06b077;
                // border:2px solid #06b077;
            
            }
        }
    }
}
</style>