<template>
  <div class="about">
    <div
      v-for="item in admindata"
      :key="item.id">
      <router-link :to="`/admin/course/${item.name}`">
        <div>点击{{item.name}}</div>
      </router-link>
    </div>
    <h1>This is an about page</h1>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name:'Admin',
  data(){
    return {
      name:'ohhh',
      admindata:[
        {
        name:'这是第一个课程',
        id:1
        },
        {
        name:'这是第二个课程',
        id:2
        }
      ]
    }
  },
  watch: {
    $route: { // 监听路由的变化
      immediate:true, // 程序加载时立即执行一次
      handler(){
        console.log('立即执行吗，详细信息')
      }
    }
  }
  // ,
  // beforeRouteEnter (to, from, next) {
  //   if(window.isLogin){
  //     next()
  //   }else{
  //     // next('/login?redirect='+to.fullPath)
  //     next('/login?redirect='+to.fullPath)
  //   }
  // }
}
</script>
