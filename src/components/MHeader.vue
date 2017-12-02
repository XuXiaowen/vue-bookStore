<template>
  <div class="header">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    created(){
    },
    methods: {},
    computed: {},
    components: {}
  }
</script>
<style scoped>
  .header {
    position: fixed;
    left: 0;
    top: 0;
    margin: 0 auto;
    width: 100%;
    height: 5rem;
    line-height: 5rem;
    text-align: center;
    font-size: 3.5rem;
    background: lightblue;
  }

</style>
