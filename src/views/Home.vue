<template>
  <div class="home">
    <img alt="Vue logo" src="img/logo.png">
    <keep-alive>
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </keep-alive>
    <div
      v-for="item in data"
      :key="item.id"
      @click="onClick(item.name)"
      >
      <!-- <router-link :to="`/admin/course/${item.name}`"> -->
          <div>
            {{item.name}}
            </div>
      <!-- </router-link> -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {getCourses} from '@/api/course'
console.log(process.env.BASE_URL, '用来判断是生产模式 还是开发模式')
export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  data(){
    return {
      selsct:'',
      publicPath: process.env.BASE_URL,
      data:[]
    }
  },
  created() {
    console.log('我是created')
  },
  beforeMount() {
    console.log(this.$el ,'beforeMount')
  },
  mounted() {
    console.log(this.$el , '我是 mounted')
    getCourses().then((res)=>{
      this.data =res
      console.log(res)
    })
  },
  methods: {
    onClick(name) { //也是一种跳转方式
        // console.log(name)
        this.$router.push({
          name:'detail',
          params:{
            name:name
          }
        })
    }
  }
}
</script>
