## Webpack 学习笔记

### 一. 搭建 webpack 环境

- 初始化项目：npm init
- 创建 webpack 配置文件：webpack.config.js
- 安装 webpack 包：webpack, webpack-dev-server, webpack-cli@3.3.12
- 修改 packjson 中的 script

```js
 "scripts": {
    "dev": "webpack-dev-server",
    "build": "webpack",
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
  -  babel-loader是loader处理es6和esnext等一些新的语法
  -  babel-polyfill是补丁，让老的浏览器可以使用promise、proxy等新的特性
- babel 配置
- scss 配置
- 图片 配置
- 字体 配置

```js
 module: {
    rules: [{
        test: /\.(js|jsx)$/,
        include: '/src',
        exclude: '/node_modules',
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
}
```