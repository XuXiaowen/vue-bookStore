<template>
  <ul>
    <router-link to="/home" tag="li"><i class="iconfont icon-shouye"></i><span>首页</span></router-link>
    <router-link to="/list" tag="li"><i class="iconfont icon-shouyeliebiao"></i><span>列表</span></router-link>
    <router-link to="/add" tag="li"><i class="iconfont icon-tianjia"></i><span>添加</span></router-link>
  </ul>
</template>
<script>
  export default {
    data(){
      return {msg: 'hello'}
    },
    created(){
    },
    methods: {},
    computed: {},
    components: {}
  }
</script>
<style scoped lang="less">
  ul{
    display: flex;
    flex-direction: row;
    position: fixed;
    left: 0;
    bottom: 0;

    width: 100%;
    height: 5rem;
    background: lightblue;
    li{
      display: flex;
      flex: 1;
      justify-content: center;
      align-items: center;
      i{
        margin-right: .5rem ;
      }
    }
  }
</style>
