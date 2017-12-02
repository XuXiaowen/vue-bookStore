import Vue from 'vue';//引入vue
import App from './App.vue';//引入根组件
import router from './router';//引入路由//+引入公共样式


//轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper';
Vue.use(VueAwesomeSwiper);
import 'swiper/dist/css/swiper.css';//导入swiper样式


new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
