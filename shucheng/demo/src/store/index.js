import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 首先声明一个状态 state
  state: {
    Msg: '',
  },
  // 然后给 actions 注册一个事件处理函数，当这个函数被触发时，将状态提交到 mutaions中处理
  actions: {
    
  },
  // 更新状态
  mutations: {
    receiveMsg(state, payload) {
      // 将A组件的数据存放于state
      state.Msg = payload.Msg
    },
  },
  // 获取状态信息
  modules: {
   
  }
})
