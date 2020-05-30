<template>
  <div id="app">
    <div class="zhuxiao">
      <span class="username" v-if="isLogin">
        {{welcome}}
        <button @click="logout">注销</button>
      </span>
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/admin">Admin</router-link>
    </div>

    <router-view/>
  </div>
</template>
<script>
import {
  mapState,
  mapGetters
  ,
  mapActions
  } from 'vuex';
export default {
  name:'App',
  data() {
    return {
    }
  },
  methods:{
    logout(){
      this['user/logout']()
      this.$router.push('/')
      // this.$store.commit('user/logout')
      
    },
    ...mapActions(['user/logout'])
  },
  computed:{
    ...mapState('user',['isLogin']),
    ...mapGetters('user', ['welcome'])
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.username{
  padding-left: 200px;
}
.zhuxiao{
  float: right
}
</style>
