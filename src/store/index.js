import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin:false
  },
  mutations: {
    //  要修改状态就要在mutations 里面去设置方法
    // 形参会传递state
    login(state){
      console.log(state,'这个形参state')
      state.isLogin=true
    },
    logout(state){
      state.isLogin=false
    }
  },
  actions: {
    // 假设登陆成功去修改状态
    login({commit},username){
      return new Promise((resolve, reject)=>{
          setTimeout(() => {
            if(username==='admin'){
              commit('login')
              resolve()
            }else{
              reject()
            }
          }, 1000);
      })
    }
  },
  modules: {
  }
})
