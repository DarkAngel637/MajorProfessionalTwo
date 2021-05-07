const path = require('path');
const fs = require('fs');

// 读取商品列表
const goodsList = fs.readFileSync('./src/mock/goodsList.json');

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src')
            }
        }
    },
    devServer: {
        before: function (app, server, compiler) {
            app.get('/goods/list', function(req, res){
                res.send(JSON.parse(goodsList));
            })
        }
    }
}