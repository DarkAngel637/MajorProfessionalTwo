const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

const data = fs.readFileSync('./src/mock/data.json');

module.exports = {
    // 入口
    entry: ['babel-polyfill', './src/index.js'],
    //  输出
    output: {
        publicPath: '/dist'
    },
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
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            'scss': path.resolve(__dirname, 'src/scss'),
            'module': path.resolve(__dirname, 'src/module')
        },
        extensions: ['.js', '.json', '.wasm', '.webp'],
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            include: '/src',
            exclude: '/node_modules',
            use: ['babel-loader'],
        }, {
            test: /\.(css|scss|sass)$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }, {
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
    }
}