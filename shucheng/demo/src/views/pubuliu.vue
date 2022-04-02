<template>
  <div id="pubuliu">
    <div class="vue-water-easy" ref="waterWrap">
      <div v-for="(items, clos) in list" :key="clos" class="colsW">
        <ul>
          <li
            v-for="(item, index) in items"
            :key="index"
            @click="toDetailCode(item)"
          >
            <img :src="item && item.url" alt="" />
            <p style="margin: 3px 0 1px">{{ item.name }}</p>
            <p>{{ item.createTime }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Pubuliu",
  data() {
    return {
      dataList: [],
      waterfallsLeft: [], //  存储在左侧的数据
      waterfallsRight: [], //  存储在右侧的数据
      page: 0, //  无限加载，模拟分页
      isEnd: false,
      once: 0, //上拉刷新 只请求一次接口
      loading: null,
      list: [
        [
          {
            url: "/shichi/pinglun/pl1.png",
            name: "pinlun1",
            createTime: "123",
          },
          {
            url: "/shichi/pinglun/pl2.png",
            name: "pinlun1",
            createTime: "123",
          },
          {
            url: "/shichi/pinglun/pl3.png",
            name: "pinlun1",
            createTime: "123",
          },
          {
            url: "/shichi/pinglun/pl4.png",
            name: "pinlun1",
            createTime: "123",
          },
        ],
        [
          {
            url: "/shichi/pinglun/pl5.png",
            name: "pinlun1",
            createTime: "555",
          },
          {
            url: "/shichi/pinglun/pl6.png",
            name: "pinlun1",
            createTime: "666",
          },
          {
            url: "/shichi/pinglun/pl7.png",
            name: "pinlun1",
            createTime: "777",
          },
          {
            url: "/shichi/pinglun/pl8.png",
            name: "pinlun1",
            createTime: "888",
          },
        ],
        [
          {
            url: "/shichi/pinglun/pl5.png",
            name: "pinlun1",
            createTime: "555",
          },
          {
            url: "/shichi/pinglun/pl6.png",
            name: "pinlun1",
            createTime: "666",
          },
          {
            url: "/shichi/pinglun/pl7.png",
            name: "pinlun1",
            createTime: "777",
          },
          {
            url: "/shichi/pinglun/pl8.png",
            name: "pinlun1",
            createTime: "888",
          },
        ],
      ],
    };
  },
  mounted() {
    window.addEventListener("scroll", this.scrollBottom, false);
  },
  created() {
    // this.getList();
  },

  methods: {
    //请求数据
    // getList(done) {
    //   this.loading = this.$loading({
    //     text: "加载中，请稍后",
    //   });
    //   this.$server.list.list
    //     .getLists(this.page, 10)
    //     .then((res) => {
    //       this.isEnd = res.content.last; //记录是否还有更多数据
    //       let content = res.content.content;
    //       if (content && content.length) {
    //         this.dataList = res.content.content;
    //         this.page++;
    //         this.start(0);
    //       } else {
    //         this.loading.close();
    //       }
    //     })
    //     .catch((err) => {
    //       this.loading.close();
    //     });
    // },
    //  一张一张的 渲染图片
    start(i) {
      const _this = this;
      let dataList = _this.dataList;
      if (i > 5) {
        _this.loading.close(); //loading可能会转很久
      }
      if (i >= dataList.length && _this.$refs.waterWrap) {
        //本次接口数据 渲染完成
        _this.once = 0;
        _this.loading.close();
        return;
      }
      _this
        .loadImg(dataList[i], i)
        .catch(() => {})
        .finally(() => {
          _this.start(++i);
        });
    },
    loadImg(item) {
      const _this = this;
      let srcUrl = item && item.url;
      return new Promise(function (resolve, reject) {
        if (item && srcUrl) {
          let img = new Image();
          img.src = srcUrl;
          img.onload = function () {
            var index = _this.getMinHeight();
            _this.list[index].push(item);
            _this.$nextTick(() => {
              resolve(img);
            });
          };
        } else {
          reject("数据错误");
        }
      });
    },
    getMinHeight() {
      let index = 0;
      try {
        if (!this.$refs.waterWrap) {
          return index;
        }
        let childs = this.$refs.waterWrap.children || [];
        let minx = childs[0].children[0].offsetHeight;
        for (let i = 1; i < childs.length; i++) {
          let element = childs[i];
          let h = element.children[0].offsetHeight;
          if (h < minx) {
            minx = h;
            index = i;
          }
        }
      } catch (e) {
        return index;
      }
      return index;
    },

    // 划到底部
    scrollBottom() {
      if (this.isEnd) {
        // 无数据了 isEnd=true；
        return;
      }
      if (this.once === 1) {
        // 滑动禁止多次请求接口
        return;
      }

      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop; //变量windowHeight是可视区的高度
      var windowHeight =
        document.documentElement.clientHeight || document.body.clientHeight; //变量scrollHeight是滚动条的总高度
      var scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight; //滚动条到底部的条件
      if (scrollTop + windowHeight == scrollHeight) {
        //已滚动底部
        this.once = 1;
        // this.getList();
      }
    },
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollBottom, false);
  },
};
</script>
<style lang='scss' scoped>
.vue-water-easy {
  color: #a7a7a7;
  font-size: 0.3rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 10px;
  div.colsW {
    flex: 1;
    box-sizing: border-box;
    position: relative;
    &:last-child {
      margin-right: 0 !important;
    }
    &:first-child {
      margin-left: 0 !important;
    }
    ul {
      list-style: none;
      width: 100%;
      padding: 0;
      margin: 0;
      li {
        width: 100%;
        padding: 15px;
        box-sizing: border-box;
        img {
          width: 100%;
          box-shadow: 0 0 5px #ccc;
        }
        p {
          color: #a7a7a7;
          font-size: 0.26rem;
          margin: 0;
        }
      }
    }
  }
}
</style>