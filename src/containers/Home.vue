<template>
  <div>
    <MHeader>Home</MHeader>
    <div class="content">
      <Swiper :swiperSlides="sliders"></Swiper>

      <!--热门图书-->
      <h3>热门图书</h3>
      <ul class="hotList" v-if="books.length">
        <li v-for="book in books">
          <img :src="book.bookCover" alt="">
          <span>{{book.bookName}}</span>
        </li>
      </ul>

      <Loading v-else></Loading>
    </div>
  </div>
</template>
<script>
  import MHeader from '../components/MHeader.vue';
  import Swiper from '../components/Swiper.vue';
  import Loading from '../components/Loading.vue';

  import axios from 'axios';//引入ajax的请求方法

  export default {
    data(){
      return {
        sliders: [],
        books: []
      }
    },
    methods: {
      getHot(){
        axios.get('/api/books').then(res => {
          setTimeout(() => {
            this.books = res.data;
          }, 2000);
        }).catch(err => {
          console.log(err);
        });
      }
    },
    created(){//直接获取后台数据 跨域 8080->3000
      axios.get('/api/sliders').then(res => {//这里要是用箭头函数，保证this指向
        this.sliders = res.data;
      }).catch(err => {
        console.log(err);
      });

      this.getHot();
    },
    activated(){
      this.getHot();
    },
    computed: {},
    components: {MHeader, Swiper, Loading}
  }
</script>
<style scoped lang="less">
  .hotList {
    display: flex;
    box-sizing: border-box;
    flex-wrap: wrap;
    padding: .5rem;
    li {
      width: 33.3333%;
      img {
        width: 100%;
        height: 80%;
      }
      span {
        display: inline-block;
        width: 100%;

        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

        color: #2a2a2a
      }
    }
  }
</style>
