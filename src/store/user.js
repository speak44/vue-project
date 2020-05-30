export default{
  namespaced:true, // 设置独立的命名空间，避免明明冲突， 这样就表示 这个state里面的siLogin 是user的状态，所以访问的时候，也要标注清楚是user里面的isLogin
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
  }  
}