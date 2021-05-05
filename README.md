## "组件化开发" 学习笔记

### 一. 搭建 webpack 环境

- 初始化项目：npm init
- 创建 webpack 配置文件：webpack.config.js
- 安装 webpack 包：webpack, webpack-dev-server, webpack-cli@3.3.12
- 修改 packjson 中的 script,添加mode区分开发环境还是生成环境
```js
 "scripts": {
    "dev": "webpack-dev-server --mode=development",
    "build": "webpack --mode=production",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

### 二. webpack 简单配置

- 出入口配置

```js
module.exports = {
  // 入口,可以省略
  entry: ['babel-polyfill', './src/index.js'],
  //  输出
  output: {
    filename: "main.js", //可以省略
    output: path.resolve(__dirname, 'dist'), //构建生成目录，可以省略
    publicPath: "/dist", //资源获取路径前缀
  },
};
```

- 配置别名，省略扩展名

```js
resolve: {
    alias: {
        '@': path.resolve(__dirname, 'src'),
        'scss': path.resolve(__dirname, 'src/scss'),
        'module': path.resolve(__dirname, 'src/module')
    },
    extensions: ['.js', '.json', '.wasm', '.webp']
},
```
- 区分babel-loader和babel-polyfill
  -  babel-loader是loader处理es6和esnext等一些新的语法
  -  babel-polyfill是补丁，让老的浏览器可以使用promise、proxy等新的特性
- babel 配置
- scss 配置
- 图片 配置
- 字体 配置

```js
 module: {
    rules: [{
        test: /\.(js|jsx)$/,
        include: /src/,
        exclude: /node_modules/',
        use: ['babel-loader'],
    },{
        test: /\.(css|scss|sass)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
    },{
        test: /\.(jpg|jpeg|png|gif|webp)$/,
        use: [{
            loader: 'url-loader',
            options: {
                limit: 10*1024
            }
        }]
    },{
        test: /\.(svg|eot|ttf|woff|woff2)/,
        use: ['file-loader']
    }]
}
```
### 三. webpack高级用法
- require.context, 获取文件夹及其子文件夹内部的所有符合条件的文件
```js
// webapck的require.context去加载一个文件夹及后续文件夹中符合规则的所有图片
importAll(require.context('../assets/menu/', true, /\.webp$/));
function importAll(r) {
    r.keys().forEach((item)=>{
        imgs.push({
            text:  menuOptions[item.slice(2, -5)],
            value: r(item)
        })
    });
}
```
- devServer中拦截网络请求，帮助我们验证逻辑和提供数据
```js
// 配置webpack起服务
devServer: {
    open: true,
    // 0.0.0.0 127.0.0.1 localhost指向自己
    // host: '0.0.0.0',
    // port: 8888,
    // hot: true,
    // liveReload: true
    before: function (app, server, compiler) {
        app.use(bodyParser.json());
        app.post('/user/login', function (req, res) {
            console.log('req.body...', req.body);
            if (req.body.userName === 'zhaoyuchao' && req.body.password === '123456' && req.body.password === '123456'){
                res.json({
                    code: 0,
                    msg: '登录成功'
                });
            }else{
                res.json({
                    code: -1,
                    msg: '用户名或者密码错误'
                })
            }
        });
        app.get('/shop/list', function(req, res){
            res.json({
                code: 0,
                data: JSON.parse(data).list,
                msg: '获取商品列表成功'
            })
        })
    },
    proxy: {
            '/api': {
                target: 'https://c.y.qq.com/', // 目标域名
                changeOrigin: true, // 切换域名
                pathRewrite: { // 重写部分url
                    '/api': ''
                }
            },
            '/zhihu': {
                target: 'https://www.zhihu.com/',
                changeOrigin: true,
                pathRewrite: {
                    '/zhihu': ''
                }
            }
        }
}
```
- 常用plugin
```js
 plugins: [
    // 清除上一次的打包结果
    new CleanWebpackPlugin(),
    // 自动注入
    new HtmlWebPackPlugin({
        template: './index.html',   // 源文件
        filename: 'index.html',         // 目标文件名
        inject: true
    }),
    // 抽离css
    new MiniCssExtractPlugin({
        filename: '[name].css'
    })
]
```

### 四，完整的webpack.config.js
```js
// 清空dist
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
// 处理html
const HtmlWebPackPlugin = require('html-webpack-plugin');
// 分离CSS
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const bodyParser = require('body-parser');
const fs = require('fs');

const data = fs.readFileSync('./src/mock/data.json');

module.exports = {
    entry: ['babel-polyfill', './src/index.js'],
    output: {
        filename: '[name].[hash:6].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist'
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        },
        extensions: ['.js', '.json', '.ts', '.tsx']
    },
    devtool: 'cheap-source-map',
    devServer: {
        host: '127.0.0.1', //10.0.5.36
        port: 10000,
        open: true,
        hot: true,
        before: function (app, server, compiler) {
            app.use(bodyParser.json());
            app.post('/user/login', function (req, res) {
                console.log('req.body...', req.body);
                if (req.body.userName === 'zhaoyuchao' && req.body.password === '123456' && req.body.password === '123456'){
                    res.json({
                        code: 0,
                        msg: '登录成功'
                    });
                }else{
                    res.json({
                        code: -1,
                        msg: '用户名或者密码错误'
                    })
                }
            });
            app.get('/shop/list', function(req, res){
                res.json({
                    code: 0,
                    data: JSON.parse(data).list,
                    msg: '获取商品列表成功'
                })
            })
        },
        proxy: {
            '/api': {
                target: 'https://c.y.qq.com/', // 目标域名
                changeOrigin: true, // 切换域名
                pathRewrite: { // 重写部分url
                    '/api': ''
                }
            },
            '/zhihu': {
                target: 'https://www.zhihu.com/',
                changeOrigin: true,
                pathRewrite: {
                    '/zhihu': ''
                }
            }
        }
    },
    module: {
        rules: [{
            test: /\.js|ts$/,
            use: ['babel-loader']
        },{
            test: /\.css|sass|scss$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        },{
            test: /\.(jpg|jpeg|png|gif|webp)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 10 * 1024
                }
            }]
        }, {
            test: /\.(svg|eot|ttf|woff|woff2)/,
            use: ['file-loader']
        }]
    },
    plugins: [
        // 清除上一次的打包结果
        new CleanWebpackPlugin(),
        // 自动注入
        new HtmlWebPackPlugin({
            template: './index.html',   // 源文件
            filename: 'index.html',         // 目标文件名
            inject: true
        }),
        // 抽离css
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ]
}
```

## Vue学习笔记
### 使用webpack手动搭建vue开发环境
- 需要安装的vue相关包
  - vue-loader
  - vue-template-compiler
  - vue-style-loader
- 示例配置
```js
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    output: {
        publicPath: '/dist'
    },
    devServer: {
        open: true
    },
    module: {
        rules: [{
            test: /\.css|sass|scss/,
            use: ['vue-style-loader', 'css-loader', 'sass-loader']
        },{
            test: /\.vue$/,
            use: ['vue-loader']
        }]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}
```

### vue的基础知识
- 概念
  - Vue实例，new Vue，全局唯一
    - el: html中挂载的选择器
    - render: 挂载根vue组件的函数
  - VueComponent实例，单vue文件，全局很多
    - template 模版，里面使用相关的vue语法
    - script 脚本，里面写相关业务逻辑
    - style 样式，里面为模版中的标签添加样式
- 指令
  - v-bind，简写：，绑定属性
  - v-on，简写@，绑定事件
  - v-for，遍历数组或对象，加key表示唯一
    - key的作用，复用组件
    - 尽可能使用唯一标识代替下标
  - v-if,v-else-if,v-else 条件渲染
  - v-show css层面选择渲染
  - v-html 插入子元素
  - v-text 插入文本
  - v-model 双向绑定受控组件
    - 常用的组件：input，checkbox，textarea，select
    - 常用修饰符：.lazy(input->change)，.number, .trim
  - v-slot 具名插槽
- 样式绑定
  - 几种方式
    - 字符串
    - 对象
    - 数组
  - 局部样式scoped
    - 覆盖：\deep\
- 事件
  - 事件绑定：v-on
  - this指向
    - 指向当期组件的实例，在源代码中使用bind绑定的
  - 事件绑定的值
    - 函数名：此函数作为事件处理函数，可以拿到事件对象Event
    - 函数调用: 此函数作为事件处理函数中的语句，拿不到事件对象Event，但是可以传入其他需要的参数
    - js表达式：此表达式作为事件处理函数中的语句，拿不到事件对象Event
    - 箭头函数：箭头函数作为事件处理函数，函数体里的函数可以通过箭头函数拿到Event，也可以传如其他参数
  - 自定义事件
    - 绑定，@getSearchResult
    - 触发，this.$emit('getSearchResult', value)
```js
    <p v-text="'周六开关1'" @click="changeSaturday"></p>
    <p v-text="'周六开关2'" @click="changeSaturday()"></p>
    <p v-text="'周六开关3'" @click="showSaturday = !showSaturday"></p>
    <p v-text="'周六开关4'" @click="e=>changeSaturday(e, '123')"></p>
```
- 生命周期（八个）
  - beforeCreate、created
    - 常用created请求数据
  - beforeMount、mounted
    - 组件挂载完成之后，可以中dom中访问到template里面的元素
    - 当组件挂载完成之后，添加事件，实例化swpier，实例地图，实例化echart
  - beforeUpdate、updated
    - 记住组件更新之前当状态
    - 常用updated在组件状态更新之后触发相关操作
  - beforeDestory、destroyed
    - 记录相关表单数据，用于自动填充
- MVVM架构(数据驱动试图)
  - Model：data，响应式数据集合
  - View：template模版
  - ViewModel：响应模型
- 基本语法
  - 模版绑定：{{}}
  - 属性绑定：v-bind
  - 事件绑定：v-on
- props
  - 作用：实现组件之间的数据传递：父向子、子向父、兄弟组件
  - props的声明：props：[] 或{}
  - props的类型检测，type
  - props的默认值，defalut
```js
export default {
    props: {
        cityList: {
            default: ()=>[],
            type: Array
        },
        changeCity: {
            default: ()=>{},
            type: Function
        },
        select: {
            default: ()=>[],
            type: Array
        }
    }
}
```
- 组件  
  - 组件的作用：抽象，封装，复用
  - 组件的状态
    - data，自身的状态，可以随意修改
    - props，祖先的状态，只读不可修改，用传递函数的方式传递修改逻辑
  - 组件的声明与使用(cityList)
    - 使用Vue.component声明全局组件
    - 在components里面声明局部组件
    - 在tempalte里面直接使用:<cityList />或<city-list></city-list>
  - 组件通信
    - props通信
    - 自定义事件
    - Event Bus
    - slot
- 计算属性computed
  - 作用：计算派生数据
  - 值：函数的执行结果
  - 优化：可以缓存结果
- 监听属性watch
  - 作用：监听对象，执行相关回调逻辑
  - 监听对象：data，props，computed，$route
  - 深度监听, deep: true
  - 立即执行：immediat: true

### Vue Router
- 为什么需要路由
  - 完成SPA的局部刷新
- 路由模式
  - hash
  - history
- 路由组件
  - router-link
    - to
    - tag
    - replace
    - active-class: router-link-active
  - router-view
    - 学会如何划分路由区域
    - 学会划分多级路由
    - 路由组件所在路径匹配路由路径
    - 几级路由匹配几次
- 路由表
```js
const router = new VueRouter({
  mode: 'history', // 路由模式 hash或者history
  routes: [{
    path: '/main',  // 路由路径
    name: 'Main',  // 路由名字
    component: Main,   // 这个路由要渲染的组件
    children: [{
      path: '/main/index',  // 路由路径
      name: 'Index',  // 路由名字
      component: Index,   // 这个路由要渲染的组件
    },{
      path: 'discover',  // 路由路径
      name: 'Discover',  // 路由名字
      component: Discover,   // 这个路由要渲染的组件
    },{
      path: 'order',  // 路由路径
      name: 'Order',  // 路由名字
      component: Order,   // 这个路由要渲染的组件
    },{
      path: 'profile',  // 路由路径
      name: 'Profile',  // 路由名字
      component: Profile,   // 这个路由要渲染的组件
    }]
  }, {
    path: '/detail',  // 路由路径
    name: 'Detail',  // 路由名字
    component: Detail   // 这个路由要渲染的组件
  },{
    path: '/',
    redirect: '/main/index'   // 路由重定向
  },{
    path: '*',
    component: Page404
  }]
})
```
- 路由传参
  - 动态路由
    - 配置动态路由:id
    - 拿到参数：this.$route.params.id
  - path...query
    - 在地址栏传参
    - 拿到参数：this.$route.query
  - name...param
    - 在history对象中传参
    - 拿到参数：this.$route.params

### Vuex

### Element UI