<template>
  <div id="Kefu">
    <div class="header">
      <span>天鲜派个人咨询</span>
      <div class="other-service">
        <i :class="yuyin" @click="close"></i>
        <span @click="dialogVisible = true">评价</span>
        <span>转人工</span>
      </div>
    </div>
    <div class="chat-room">
      <div class="room-detail">
        <div class="kf-news">
          <div class="tx"><i class="el-icon-user-solid"></i></div>
          <div class="service">
            <ul>
              <li
                v-for="(item, index) in questionList"
                :key="index"
                @click="reply(index)"
              >
                {{ item.text }}
              </li>
            </ul>
          </div>
        </div>
        <div class="operation" v-for="(item,index) in duihuaList" :key="index">
          <div class="tx"><i class="el-icon-user-solid"></i></div>
          <div class="content">
            <p>
              {{item.text}}
            </p>
            <div class="icons">
              <i class="iconfont icon-dianzan_kuai" style="font-size: 17px"></i
              ><span>有帮助</span><i>|</i>
              <i class="iconfont icon-cai" style="margin-left: 10px"></i
              ><span>没帮助</span>
            </div>
          </div>
        </div>
        <!-- <div class="kf-news" style="background-color: yellow"></div>
        <div class="kf-news" style="background-color: red"></div>
        <div class="kf-news" style="background-color: purple"></div> -->
      </div>
    </div>
    <!-- 弹框 -->
    <el-dialog
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <span>您对机器人的服务是否满意？</span>
      <div class="pingjia">
          <div v-for="(item,index) in pingjiaList" :key="index" @click="pingjia(index)" :class="index==selected?'iconActive':''">
              <i  :class="item.icon"></i><span>{{item.text}}</span>
          </div>
          
          <!-- <i class=""></i><span>一般</span> -->
          <!-- <i class=""></i><span>不满意</span> -->
      </div>  
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false"
          >提交评价</el-button
        >
        <el-button @click="dialogVisible = false">取 消</el-button>
        
      </div>
    </el-dialog>

    <div class="information"></div>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  props: [""],
  data() {
    return {
      selected:'0',
      dialogVisible: false,
      count: 0,
      yuyin: "el-icon-microphone",
      duihuaList:[
        {text:'充值后可以提供发票，可开增值税普通发票和增值税专用发票，发票内容默认为技术服务费，如需发票， 请点击【转人工】按钮，或输入文字【转人工】客服为您办理。'}
      ],
      pingjiaList:[
          {icon:'iconfont icon-haoping',text:'满意'},
          {icon:'iconfont icon-zhongping',text:'一般'},
          {icon:'iconfont icon-chaping',text:'不满意'}
      ],
      questionList: [
        // {text:''},
        { text: "您可能会关心如下常见问题，请点击或回复相应序号" },
        { text: "1. 会员有哪些类型和套餐？" },
        { text: "2. 为什么充值了会员下载不了素材？" },
        { text: "3. 充值后可以开发票吗？" },
        { text: "4. 如何解绑社交帐号？" },
        { text: "5. 如何退出？" },
        { text: "6. 手机号遗失无法登录" },
        { text: "7. 为什么无法用QQ登录千图？" },
        { text: "8. 如何更改DNS" },
        { text: "9. 个人VIP和企业VIP的区别是什么？" },
      ],
    };
  },
  created() {},
  methods: {
    pingjia(index){
        this.selected=index;
    },
    reply(index) {
      //
      if (index == 1) {
        this.duihuaList.push({text:'1111'})
      }else if(index ==2){
          this.duihuaList.push({text:'2222'})
      }else if(index ==3){
          this.duihuaList.push({text:'3333'})
      }else if(index ==4){
          this.duihuaList.push({text:'4444'})
      }else if(index ==5){
          this.duihuaList.push({text:'5555'})
      }else if(index ==6){
          this.duihuaList.push({text:'6666'})
      }else if(index ==7){
          this.duihuaList.push({text:'7777'})
      }else if(index ==8){
          this.duihuaList.push({text:'8888'})
      }
    },
    close() {
      this.count++;
      if (this.count % 2 == 1) {
        this.yuyin = "el-icon-turn-off-microphone";
      } else {
        this.yuyin = "el-icon-microphone";
      }
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
  },
};
</script>
<style lang='sass'>
@import "./scss/kefu.scss"
</style>