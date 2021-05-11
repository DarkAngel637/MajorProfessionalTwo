const path = require('path');
const fs = require('fs');

// 读取商品列表
const goodsList = fs.readFileSync('./src/mock/goodsList.json');
// 读取商品分类
const goodsType = fs.readFileSync('./src/mock/types.json');


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
            /**
             * 获取商品列表
             * @param type? 获取该分类下的商品列表
             *  */ 
            app.get('/goods/list', function(req, res){
                let list = JSON.parse(goodsList);
                if (req.query.type){
                    list.list = list.list.filter(item=>item.type === req.query.type);
                }
                res.send(list);
            }),
            // 获取商品详情
            app.get('/goods/detail', function(req, res){
                let id = req.query.id;
                let list = JSON.parse(goodsList);
                let index = list.list.findIndex(item=>item.id === id);
                res.json(list.list[index]);
            })
            // 获取商品分类
            app.get('/goods/types', function(req, res){
                res.send(JSON.parse(goodsType));
            })
        }
    }
}