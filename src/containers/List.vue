<template>
  <div>
    <MHeader>List</MHeader>
    <div class="content">
      <ul>
        <li v-for="book in books">
          <div><img :src="book.bookCover" alt=""></div>
          <div>
            <h3>{{book.bookName}}</h3>
            <p>{{book.bookInfo}}</p>
            <div class="btn-list">
              <button @click="remove(book.id)">删除</button>
              <!--path和params不能共存-->
              <!--<router-link tag="button" :to={path:'/update',params:{id:book.id}}>修改</router-link>-->

              <!--如果通过对象传递params,需要给路径起别名=>index.js：..name:'update'-->
              <router-link tag="button" :to="{name:'update',params:{id:book.id}}">修改</router-link>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import MHeader from '../components/MHeader.vue';
  import axios from 'axios';
  export default {
    data(){
      return {books: []}
    },
    methods: {
      getBooks(){
        axios.get('/api/book').then((res) => {
          this.books = res.data;//data axios包装的把数据都放到data下
        })
      },
      remove(id){
        axios.delete('/api/book?id=' + id).then(res => {
          //删除成功后将当前id的这一项数据删除掉
          this.books = this.books.filter(item => item.id != id)
        })
      }
    },
    created(){
      this.getBooks();
    },
    //为了解决add.vue中添加后跳转到list.vue时 需要刷新才能看到新数据的问题
    activated(){//keep-alive缓存后依然会走的函数(钩子函数)
      this.getBooks();//虽然缓存 但是点进来重新获取数据
    },
    computed: {},
    components: {MHeader},
  }
</script>
<style scoped lang="less">
  li {
    display: flex; /*默认是row布局*/
    margin: 1rem;
    border-bottom: 1px solid #ccc;
    img {
      width: 12rem;
      height: 100%;
    }
    div {
      display: flex;
      flex-direction: column;
    }
  }
</style>
