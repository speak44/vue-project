import Vue from 'vue'
import Vuex from 'vuex'
import user from './user';
// console.log(user,'user')
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user
  },
  strict: true  // 严格模式，防止用户手动去修改状态
})
