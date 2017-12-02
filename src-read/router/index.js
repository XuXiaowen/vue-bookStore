import Vue from 'vue'
import Router from 'vue-router'//引入路由
//import HelloWorld from '@/components/HelloWorld'
import Home from '../components/Home.vue'

Vue.use(Router);//vue-router是vue的一个插件，使用一下VueRouter

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
