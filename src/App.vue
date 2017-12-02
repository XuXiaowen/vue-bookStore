<template>
  <div>

    <transition name="slider"><!--转场动画-->
      <keep-alive><!--keep-alive 缓存 transition/template也会缓存-->
        <router-view></router-view>
      </keep-alive>
    </transition>
    <MNav></MNav>
  </div>
</template>

<script>
  //叫Nav会和原生的冲突=>MNav(移动端的Nav)
  import MNav from './components/MNav.vue';
  export default{
    data(){
      return {msg: 'hello'}
    },
    methods: {},
    components: {MNav},
    computed: {}
  }
</script>
<style>
  @import "common/index.less";

  .content {
    position: fixed;
    left: 0;
    top: 5rem;
    bottom: 5rem;
    width: 100%;
    overflow-y: scroll;
  }

  /*进入前的位置*/
  .slider-enter {
    transform: translateX(100%);
  }

  /*激活时的动画*/
  .slider-enter-active {
    transition: all .3s;
  }

  /*离开时的目的地和动画*/
  .slider-leave-active {
    transform: translateX(-100%);
    transition: all .3s;
  }
</style>
