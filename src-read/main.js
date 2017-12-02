import Vue from 'vue'//引入vue
import App from './App'//引入App组件 可以忽略.js/.json/.vue
import router from './router';//默认引用时 如果是index .js可以省略

new Vue({
  el: '#app',//挂载点
  router,

  /*
  //runtime+compiler 支持编译template的 会将template编译成render函数
  template:'<App/>',
  components:{App}*/

  /*
  //runtime (不支持template写法)
  render:function (createElement) {
    return createElement('h1','hello')
  }*///=>简化写法=>

  //runtime**//初始化时选的runtime
  render:(h)=>h(App)//将App组件渲染到#app元素内only
});
