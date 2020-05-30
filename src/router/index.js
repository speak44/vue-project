import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/login',
    name:'Login',
    component:()=> import('../views/Login.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Admin.vue'),
    children:[
      {
        path:'/admin/course/:name',
        name:'detail',
        component:()=>import('../views/Detail.vue')
      }
    ],
    // meta: { // 这个属性表示，进入这个页面需要验证登录，需要守卫
    //   auth: true
    // }
    // ,
    // beforeEnter: (to, from, next) => {
    //   if(window.isLogin){
    //     next()
    //   }else{
    //     next('/login?redirect='+to.fullPath)
    //   }
    // }
  },
  {
    path:'/course/:name',
    component:()=>import('../views/Detail.vue')
  },
  {
    path:'*',
    component: () => import('../views/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// 全局守卫
// router.beforeEach((to, from, next)=>{
//   // to 我要去哪
//   //  from 我来自哪
//   // next 应不应该放行
//   // 判断路由是否需要守卫
//   // meta 数据的方式来判断
//     if(to.meta.auth) { // 判断要去的路由的mate的auth 是否为true。是否需要守卫才可以进入
//       if(window.isLogin){ // 用“window.isLogin” 这个参数来判断是否已经登录了。如果已经登陆了，就可以进展下一步
//         next()
//       }else{
//         next('/login?redirect='+to.fullPath) // to.fullPath 想要去的地址的完整路径
//       }
//     }else{
//       next()
//     }
// })

// 设置动态的路由
// 首先判断登陆态 ture -if 去登录页面就跳转到首页；else 去其他页面就直接跳转
// false - 去其他页面先去登录页面，去登陆页面就直接去
router.beforeEach((to, from, next)=>{
  if(window.isLogin){
    if(to.path==='/login'){
      next('/')
    }else{
      next()
    }
  }else{
    if(to.path==='/login'){
      next()
    }else{
      next('/login?redirect='+to.fullPath)
    }
  }
})



export default router
