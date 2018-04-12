# webpack4-vue2-demo
使用webpack4.0.0+ 与vue2.0+ 结合的简单例子  
#概念：webpack是一个现代的JavaScript应用程序的静态模块打包器(module bundler)。
webpack下，所有类型的文件都可以是module，包括js`css`图片`json等等。
我们可以import/require各类文件，通过使用加载器（loader）将其转化为javascript。

# VUE项目
新建项目目录，并且初始化项目
$ mkdir demo-wv2 //新建项目目录
$ npm init       //初始化项目
安装webpack`vue`vue-loader(vue加载器)
$ npm install webpack --save

$ npm install vue vue-loader --save

# 注释：webpack4已经将命令单出拆分出来，所以需要安装webpack-cli
npm install -D webpack-cli 
/*git下面安装报错 需要cmd安装*/
在跟目录下创建index.html作为全局的项目入口文件。
在根目录下创建src文件并在其中创建index.js。webpack4+会默认把其当作webpack的入口文件。
在src文件下新建assets文件作为资源文件的存放：新建imgs文件存放图片，新建styles文件存放css文件
安装css-loader`vue-template-compiler依赖项
$ npm install css-loader vue-template-compiler --save
/*vue-template-compiler 可以让程序识别.vue内的内容*/
此时可以运行npx webpack src/index.js -o build.js --mode development 验证程序是否可以执行。

打开浏览器可以看到index.js中的内容可以打印到控制台
#新建vue项目
在src文件下创建app.vue文件，并在其中定义模块
``` javascript
<template>
  <div id="myapp">
      <header-tab></header-tab>
      <h2>{{msg}}</h2>
      <div class="nav-box">
          <p class="nav-list">
              <router-link class="nav-item" to="/">首页</router-link>
              <router-link class="nav-item" to="/about">关于</router-link>
          </p>
      </div>
      <div>
          <router-view></router-view>
      </div>
  </div>
</template>
<script>
    import HeaderTab from './components/header.vue';
    export default{
        name: 'app',
        data(){
            return{
                msg:'hello webpack-4 vue2'
            }
        },
        components:{
            HeaderTab
        }
    }
</script>
<style>
    h2{
        color: red;
    };
    #app{
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    h1,h2{
        font-weight: normal;
    }
    ul{
        list-style-type: none;
        padding: 0;
    }
    li{
        text-align: left;
        margin: 0 10px;
    }
    a{
        color: #42b983;
    }
</style>
```
在src文件下新建components文件夹`views文件夹。
在components文件下新建header.vue文件（公共组件头部）
<template>
  <div>
      <h1>公共header</h1>
      <img class="imgIcon" src="../assets/imgs/icon.jpg" alt="">
  </div>
</template>
<style>
.imgIcon{
  cursor: pointer;
}
.imgIcon:hover {
  /* -webkit-animation: shake .3s ease-in-out 0s 3 both;
  animation: shake .3s ease-in-out 0s 3 both; */
   -webkit-animation: imgScale .3s ease-in-out 0s  both;
  animation: imgScale .3s ease-in-out 0s  both;
}
@-webkit-keyframes imgScale{
  100%{
    -webkit-transform: scale(1.2);
    transform: scale(1.2)
  }
}
@-webkit-keyframes imgMove{
  100%{
    -webkit-transform: translateX(30px);
    transform: translateX(30px)
  }
}
@-webkit-keyframes shake{
  0%,50%,100%{
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  25%{
    -webkit-transform: rotate(15deg);
    transform: rotate(15deg);
  }
  75%{
    -webkit-transform: rotate(-15deg);
    transform: rotate(-15deg);
  }
}
</style>

在views文件下新建home.vue about.vue（页面）
//about.vue
<template>
  <div>about</div>
</template>

//home.vue
<template>
  <div>
      <ul>
          <li v-for="todo in todos">
              {{todo.text}}
          </li>
      </ul>
      <button @click="eClick()">事件</button>
  </div>
</template>
<script>
    export default {
        name: 'indexP',
        data () {
            return {
                todos: [
                    {text: 'Learn Javascript'},
                    {text: 'Learn Vue2'},
                    {text: 'Learn Webpack4'}
                ]
            }
        },
        methods:{
            eClick(){
                console.log('9999')
            }
        }
    }
</script>

在src文件根目录下新建routes.js作为路由配置文件。
import Vue from 'vue'; 
import Router from 'vue-router';
import indexPage from './components/header.vue';
import homePage from './views/home.vue';
import aboutPage from './views/about.vue';
Vue.use(Router)
export default new Router({
    routes: [{
            path: '/',
            component: homePage
        },
        {
            path: '/about',
            component: aboutPage
        }
    ]
})


安装依赖项：style-loader` url-loader` file-loader` less` less-loader

在根目录下创建webpack配置文件 webpack.config.js文件
const path = require('path');//加载path模块
module.exports ={
    mode:'development',//定义打包运行的类型  webpack4+新增
   //更改输出目录为di's't
    output: {  
        publicPath: '/dist/'
    },
    module: {
        rules:[
            {
                test:/\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(gif|jpg|jpeg|png|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit:1024,
                            name:'[name]'
                        }
                    }
                ]
            }
        ]
    }
}
编辑index.js文件
import Vue from 'vue';//引入vue
import App from './app.vue';//引入vue入口文件
import router from './routes.js'; //引入路由
import './assets/styles/base.css';//引入公共css文件
// const root = document.createElement('div');
// document.body.appendChild(root);
new Vue({
    router,
    el: "#appIndex",
    render: (h) => h(App)
})

运行npx webpack --mode development 可以进行打包，会多出来一个dist文件，并且生成main.js.

添加事实刷新功能  webpack-dev-server
安装webpack-dev-server,安装完成后运行npx webpack-dev-server 就可以启动项目，项目有更新后会事实刷新浏览器。
npm install -D webpack-dev-server 


#打包
在完成项目开发后，我们需要输出文件给生产环境部署，只要执行：
$ npx webpack --mode production
就可以打包出所有静态资源

#部署
部署时，拷贝dist目录及index.html即可