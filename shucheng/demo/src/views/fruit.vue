<template>
  <div id="fruit">
    <Cscene />
    <div class="container">
      <el-breadcrumb style="margin-top: 20px">
        <el-breadcrumb-item :to="{ path: '/' }">产品</el-breadcrumb-item>
        <el-breadcrumb-item>{{ page }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="options">
      <!-- <ul>
        <li>
          <h6>品牌：</h6>
          <span v-for="item in pinpaiData" :key="item">{{
            item
          }}</span>
        </li>
        <li>
          <h6>原产地：</h6>
          <span v-for="item in areaData" :key="item">{{
            item
          }}</span>
        </li>
        <li>
          <h6>品种：</h6>
          <span v-for="item in pinzhongData" :key="item">{{
            item
          }}</span>
        </li>
        <li>
          <h6>包装形式：</h6>
          <span v-for="item in baozhuangData" :key="item">{{
            item
          }}</span>
        </li>
        <li>
          <h6>其他选项：</h6>
          <span v-for="item in qitaData" :key="item">{{
            item
          }}</span>
        </li>
      </ul> -->
      <ul>
        <li v-for="(items,index) in optionsList" :key="index">
          <span v-for="item in items" :key="item">{{item}}</span>
        </li>
      </ul>


    </div>
    <!-- 排序bar -->
    <div class="sortingBar">
      <ul>
        <li
          v-for="(item,index) in sortingData"
          :key="item"
          @click="handleClick(index)"
          :class="activeItem == index ? 'active1' : ''"
        >
          {{ item }}
        </li>
        
      </ul>
      <div class="pagination">
        <pagination
          v-show="total > 0"
          :total="total"
          :page.sync="listQuery.page"
          :limit.sync="listQuery.pageSize"
          @pagination="getList"
        />
      </div>
    </div>
    <div class="goods">
      <ul>
        <li v-for="(item, index) in goodsList" :key="index">
          <div class="goods_img">
            <img :src="'/goods/g' + item.id + '.jpg'" alt="" />
          </div>
          <div class="goods_introduce">
            <button>{{ item.biaoqian }}</button>
            <h4>{{ item.price }}</h4>
            <span class="zhe">4.4折</span>
            <div class="describe">
              <p>{{ item.describe }}</p>
            </div>
            <div class="label">
              <span><i class="el-icon-star-on"></i> 关注</span>
              <span><i class="el-icon-s-goods"></i> 加入购物车</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Pagination from "@/components/Pagination";
import { getGoodsList } from "@/api/goods";
import Cscene from "../components/Cscene.vue";
export default {
  name: "Fruit",
  components: { Cscene, Pagination },
  props: [""],
  data() {
    return {
      page: "",
      listLoading: false,
      total: 0,
      listQuery: {
        page: 1,
        pageSize: 20,
        sort: "+id",
        type: "",
      },
      currentPage4: 4,
      activeItem: 0,
      optionsList:[],
      sortingData: ["综合","销量","价格","折扣",],
      goodsList: [
        {
          img: "1",
          price: "123.00",
          describe:
            "【JD物流】新疆阿克苏冰糖心苹果春节日送礼年货节新鲜水果红富士时令丑苹果",
        },
      ],
      key: "",
    };
  },
  created() {
    this.getList();
  },
  methods: {
    handleClick(index){
      this.activeItem=index;
    },
    getList() {
      var type = this.$route.params && this.$route.params.text;
      this.page=type;
      if(type=='新鲜水果'){
        type='fruit';
        this.optionsList=[
        ['品牌',"农夫果园", "华味美","良田记","聚慧果园","伊人一果"],
        ['水果','桔/橘','苹果','瓜','橙子','芒果','奇异果/猕猴桃','梨','更多水果'],
        ['原产地',"山东" ,"山西" ,"北京" ,"上海" ,"湖南" ,"广东" ,"广西" ,"湖北" ,"新疆"],
        ['包装形式',"简装礼盒" ,"精装礼盒"],
        ['高级选项',"果实直径","特产产品","国产/进口","阿克苏苹果单果果径"],
      ]
      }else if(type=='海鲜水产'){
        type='seafood';
        this.optionsList=[
          ['品牌','三都港','红功夫','禧美海产（Seamix）','今锦上','万景翔泰（XIANGTAI）GUO','LIAN蓝雪','沃鲜汇','鱻谣御','鲜之王','红小厨'],
          ['海鲜水产','虾类','鱼类','贝类','软足类','蟹类','海鲜制品','低温海产','干货海参'],
          ['类别','青蟹','鱿鱼干','基围虾','海参','淡干海参','虾皮','对虾/竹节虾','青花鱼','鱼类','即食海参','海米','牛蛙','石斑鱼'],
          ['包装形式','袋装','礼盒装','简装盒装'],
          ['海水/淡水','淡水','海水'],
          ['高级选项','食品工艺','净重','烹饪建议','固形物含量','储运条件','原产地','国产/进口'],
        ]
        
      }else if(type=='精选肉类'){
        type='meat';
        this.optionsList=[
          ['品牌','温氏','聪厨','汉拿山','老饭骨','珍味小梅园','老诚一锅'],
          ['禽肉蛋品','鸡肉','蛋类','鸭肉','其他禽类'],
          ['猪牛羊肉','猪肉','其它肉类','牛肉','羊肉','内脏类'],
          ['速食熟食','方便菜','肉制品','火锅丸料'],
          ['面点烘焙','面点','新鲜蛋糕'],
          ['海鲜水产','海鲜制品','虾类','其他水产','鱼类','贝类','低温海产','干货'],
          ['高级选项','食用方法','食材类别','类别','口味','品种','菜品类别','包装形式','国产/进口','净重'],

        ]
      }else if(type=='蔬菜蛋品'){
        type='vegetables';
        this.optionsList=[
          ['品牌','小汤山','京百味','京地达','聚怀斋','有机汇','家美舒达','自然之星（NATURE STAR）','密农人家','桃李村','金良玉地'],
          ['蔬菜','叶菜类','茄果瓜类','根茎类','半加工蔬菜','鲜菌菇','葱姜蒜椒'],
          ['类别','百合牛蒡','菜心','西红柿','芥蓝','黄瓜','玉米','花生','菠菜','荸荠','西芹','秋葵','紫薯','西兰花','南瓜'],
          ['烹饪建议','火锅','卤菜','炒菜','烧烤','蒸菜','煎炸','炖菜'],
          ['包装形式','礼盒装','简装'],
          ['高级选项','净重','其他分类']
        ]

      }else if(type=='冷饮冻食'){
        type='frozen';
        this.optionsList=[
          ['品牌','安井','上鲜','思念','正大','广州酒家','正大食品（CP）','泰森（Tyson）','优形（ishape）','六和'],
          ['分类','面点','鸡肉','方便菜'],
          ['类别','整鸡','鸡翅','包子','面条','鸡胸肉','手抓饼','鸡腿','花卷','鸡爪','鸡心','馒头','鸡胗/鸡肫','油条','鸡肉串'],
          ['菜品类别','火锅/汤类','菜类','主食类','小吃类'],
          ['包装形式','简装','礼盒装'],
          ['高级选项','食用方法','饲养方式','加工方式','品种','国产/进口','口味净重','风味','整鸡分类','烹饪建议']
        ]
      }
      this.listQuery.type=type
      getGoodsList(this.listQuery).then((res) => {
        this.total = res.data.count;
        this.goodsList = res.data.list;
        console.log(res);
      });
    }
  },
};
</script>
<style lang='sass' scoped>
@import './scss/fruit.scss'
</style>