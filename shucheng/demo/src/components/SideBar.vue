<template>
  <div id="sidebar">
    <el-drawer
      title="我是标题"
      :modal="false"
      :visible.sync="Message"
      :with-header="false"
    >
      <span>我来啦!</span>
    </el-drawer>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  components: {},
  props: [""],
  data() {
    return {};
  },
  computed: {
      // 这里存储从store里获取的A组件的数据
    //   Message(){
    //     return this.$store.state.Msg
    //   }
  },
  created() {},
  methods: {},
};
</script>
<style lang='' scoped>
</style>