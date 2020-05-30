export default{
  namespaced:true, // 设置独立的命名空间，避免明明冲突， 这样就表示 这个state里面的siLogin 是user的状态，所以访问的时候，也要标注清楚是user里面的isLogin
  state: {
    isLogin:false,
    username:''
  },
  mutations: {
    //  要修改状态就要在mutations 里面去设置方法
    // 形参会传递state
    login(state, username){
      // console.log(state,'这个形参state')
      state.isLogin=true
      state.username=username
    },
    logout(state){
      state.isLogin=false
      state.username=''
    }
  },
  // 派生 相当于 vue中的计算属性，计算属性：computed ，通过改变值 返回一个新的内容
  getters:{
    welcome: state =>{ // 当有用户名的时候，显示username 欢迎回来
      return state.username+'，欢迎回来'
    }
  },
  actions: {
    // 假设登陆成功去修改状态
    login({commit},username){
      // console.log(username, 'actions-actions')
      return new Promise((resolve, reject)=>{
          setTimeout(() => {
            if(username==='admin'){
              commit('login', username)
              resolve()
            }else{
              reject()
            }
          }, 1000);
      })
    },
    logout({commit}){
      commit('logout')
    }
  }  
}