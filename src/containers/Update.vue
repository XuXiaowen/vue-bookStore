<template>
  <div class="update">
    <MHeader>
      <i @click="back"></i>
      修改
    </MHeader>
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
        <button @click="update">修改</button>
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
    methods: {
      back(){
        //console.log(this.$router);
        this.$router.go(-1);
      },
      getBook(){
        axios.get('/api/book?id=' + this.$route.params.id).then(res => {
          this.book = res.data;//将数据放入输入框内
        });
      },
      update(){
        axios.put('/api/book?id=' + this.book.id, this.book).then(res => this.back());
      }
    },
    created(){//当页面加载时获取路径中的id 请求出对应的数据
      console.log(this.$route);
      this.getBook();
    },
    activated(){
      console.log(this.$route.params.id);
      this.getBook();
    },
    computed: {},
    components: {MHeader}
  }
</script>
<style scoped lang="less">
  i { /*纯粹练手*/
    position: absolute;
    left: 2rem;
    top: 2rem;
    display: block;
    border: .2rem solid #ffffff;
    width: 1rem;
    height: 1rem;
    -webkit-transform-origin: center;
    transform: rotate(45deg);
    border-top: 0;
    border-right: 0;
  }

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
