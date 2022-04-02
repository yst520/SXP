
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';
// element-ui
import ElementUI from'element-ui'; 
import'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.prototype.axios=axios
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
