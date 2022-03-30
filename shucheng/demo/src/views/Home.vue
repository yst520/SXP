<template>
  <div class="home">
    <Swiper/>
    
    <Delicious/>
    <Recommended/>
  </div>
</template>

<script>
import Swiper from '../components/Swiper.vue'
import Recommended from '../components/Recommended.vue'
import Delicious from '../components/Delicious.vue'

export default {

  name: 'Home',
  components: {
    Swiper,Recommended,
    Delicious,
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
