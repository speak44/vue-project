export default store => {
  // sotre 初始化的时候，将存储在localstore中的状态还原
  if(localStorage) {
   const user =JSON.parse(localStorage.getItem('user'))
   if(user){
      store.commit('user/login',user.username)
   }
  }
  // 如果用户状态发生改变， 自动存入localStore里面
  store.subscribe((mutation, state)=>{
    if(mutation.type==="user/login") {
      const user = JSON.stringify(state.user)
      localStorage.setItem('user',user)
    }else if(mutation.type==="user/logout") {
      localStorage.removeItem('user')
    }
  })
}