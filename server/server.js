//server.js 提供数据接口

//第一个接口 获取轮播图数据 /api/sliders
//第二个接口 获取最新上映热门书籍数据 /api/books

let http = require('http');
let url = require('url');
let sliders = require('./mock/sliders');

let fs = require('fs');
//读取图书数据
function read(callback) {
  fs.readFile('./mock/book.json', 'utf8', (err, data) => {
    if (err || data == '') return callback([]);
    callback(JSON.parse(data));
  })
}
read((data) => {
  console.log(data);
});

//写入图书数据
function write(data, callback) {
  fs.writeFile('./mock/book.json', JSON.stringify(data), callback);
}

let booInfos = require('./mock/book.json');
http.createServer((req, res) => {
  let {pathname, query} = url.parse(req.url, true);
  if (pathname === '/api/sliders') {
    res.end(JSON.stringify(sliders));
  } else if (pathname === '/api/books') {
    read(data => {
      let books = data.reverse().slice(0, 9);
      res.end(JSON.stringify(books))
    })
  } else if (pathname === '/api/book') {
    //请求方法 读取出的是大写
    let method = req.method;
    let id = parseInt(query.id);//转换成数字类型
    if (method === 'GET') {
      if (id) {//获取一个
        read(books => {
          //find找到后返回那一项,找不到返回的是undefined
          let book = books.find(item => item.id == id);
          res.end(JSON.stringify(book));
        })
      } else {//获取全部 返回所有图书
        read(books => {
          res.end(JSON.stringify(books));
        })
      }
    } else if (method === 'POST') {
      //接收传递过来的数据->添加一个id->写入到book.json中
      let str = '';
      req.on('data', (chunk) => {
        str += chunk;
      });
      req.on('end', () => {
        let book = JSON.parse(str);//前端传递的书
        read((books) => {//读取所有的图书 判断是否有书
          book.id = books.length == 0 ? 1 : books[books.length - 1].id + 1;
          books.push(book);
          write(books, () => {
            res.end(JSON.stringify(book));//添加成功后返回成功的那一项//按照风格需要end
          })
        });
      });

    } else if (method === 'PUT') {
      //拿到id->获取传递的数据->读出数据去更改内容->将最新的数据写回到json中->响应结束返回修改的那一项
      let str = '';
      req.on('data', chunk => {
        str += chunk;
      });
      req.on('end', () => {
        let book = JSON.parse(str);
        read((books) => {
          books = books.map(item => {
            if (item.id == id) {
              return book;
            }
            return item;
          });
          write(books,()=>{
            res.end(JSON.stringify(book));
          })
        })
      })

    } else if (method === 'DELETE') {
      read((books) => {
        books = books.filter(item => item.id != id);
        write(books, () => {
          res.end(JSON.stringify({}));//风格规定要返回
        })
      })
    }
  }
}).listen(3000);
