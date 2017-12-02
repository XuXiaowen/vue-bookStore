vue init webpack book-store
选runtime only (<6k)

npm install nrm
nrm use taobao
npm install
npm run dev

####可能遇到的问题：
1、端口号被占用=>config.index.js改端口号
2、更改打包的目的地 webpack.base.conf.js改路径
(更改配置文件后需要重启服务 npm run dev)

npm install less less-loader --save-dev

npm install vue-awesome-swiper --save
Vue-Awesome-Swiper

npm install axios //安完记得重新run一下
 
 problem:
 [Vue warn]: Do not use built-in or reserved HTML elements as component id: Header=>MHeader

####list页：
通过相同的路径/book
请求的方式不同实现获取不同的资源
GET获取 url路径传递数据
PUT修改 url+reqbody
POST增加 reqbody
DELETE删除 url
