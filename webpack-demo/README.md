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
  entry: "./src/index.js",
  //  输出
  output: {
    filename: "main.js", //可以省略
    publicPath: "/dist", //资源获取路径前缀
  },
};
```

- 配置别名

```js
resolve: {
    alias: {
        '@': path.resolve(__dirname, 'src'),
        'scss': path.resolve(__dirname, 'src/scss'),
        'module': path.resolve(__dirname, 'src/module')
    }
},

```
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
