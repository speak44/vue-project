<template>
  <div>
    <h1>这是一个登录页面</h1>
    <div
      v-if="!isLogin">   
      <button
        @click="login"
      >
        登录按钮
      </button>
    </div>
    <div
      v-else>
      <button
        @click="logout"
      >
        注销按钮
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data(){
    return{
      // isLogin:false
    }
  },
  methods:{
    login(){
      // console.log('454545kk')
      //window.isLogin
      // window.isLogin=true
      // 修改vuex里面的状态，通过commit， 修改mutation变更状态
      // this.$store.commit('login')
      // 派发动作，触发actives
      this.$store.dispatch('login', 'admin').then(()=>{
        this.$router.push(this.$route.query.redirect)
       }).catch(()=>{
         alert('用户名错误')
       })
       // 跳转使用的是查询参，路由url ？后面 “redirect”
       console.log(this.$route.query, 'this.$route.query')
      // this.$router.push(this.$route.query.redirect)
    },
    logout(){
      // window.isLogin=false
      this.$store.commit('isLogin')
      this.$router.push('/')
    }
  },
  computed: {
    isLogin(){
      // console.log(window.isLogin)
      return this.$store.state.isLogin
    }
  }
}
</script>
