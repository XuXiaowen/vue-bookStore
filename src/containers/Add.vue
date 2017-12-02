<template>
  <div>
    <MHeader>Add</MHeader>

    <div class="content">
      <ul>
        <li>
          <label for="bookName">书名</label>
          <input type="text" id="bookName" placeholder="请输入书名" v-model="book.bookName">
        </li>
        <li>
          <label for="bookCover">封面</label>
          <input type="text" id="bookCover" placeholder="请上传封面" v-model="book.bookCover">
        </li>
        <li>
          <label for="bookInfo">详情</label>
          <input type="text" id="bookInfo" placeholder="请输入详情信息" v-model="book.bookInfo">
        </li>
        <li>
          <label for="bookPrice">价格</label>
          <input type="text" id="bookPrice" placeholder="请输入价格" v-model="book.bookPrice">
        </li>
        <button @click="add">添加</button>
      </ul>
    </div>
  </div>
</template>
<script>
  import MHeader from '../components/MHeader.vue';
  import axios from 'axios';
  export default {
    data(){
      return {
        book: {
          bookName: '',
          bookCover: '',
          bookPrice: '',
          bookInfo: '',
        }
      }
    },
    created(){

    },
    methods: {
      //增加图书
      add(){
        axios.post('/api/book', this.book).then((res) => {
          this.book = {
            bookName: '',
            bookCover: '',
            bookPrice: '',
            bookInfo: '',
          };
          this.$router.push('/list');//成功添加后跳转到列表页
        });
      }
    },
    computed: {},
    components: {MHeader}
  }
</script>
<style scoped lang="less">
  ul {
    padding: 2rem 3rem;
    li {
      margin: 1rem 0;
      display: flex;
      label {
        flex: 1;
      }
      input {
        flex: 5;
      }
    }
  }
</style>
