<template>
  <div id="app" class="app">
    <Header v-show="$route.meta.show2"/>
    <Header2 v-show="$route.meta.show" />
    <Scene v-show="$route.meta.scene"/>
    <router-view/>
    <Footer v-show="$route.meta.show"/>
    <Backtop />
    

  </div>
</template>
<script>
import Header from './components/Header.vue'
import Header2 from './components/Header2.vue'
import Swiper from './components/Swiper.vue'
import Recommended from './components/Recommended.vue'
import Scene from './components/Scene.vue'
import Footer from './components/Footer.vue'
import Backtop from './components/Backtop.vue'


export default {

  name: 'Home',
  components: {
    Header,Header2,Swiper,Recommended,Scene,Footer,Backtop
  },
  data() {
    return {
      // show:true
    };
  },
  created() {},
  methods: {
   
  },
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
