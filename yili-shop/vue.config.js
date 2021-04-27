const path = require('path');
const fs = require('fs');
const data = fs.readFileSync('./data.json');

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src')
            },
            extensions: ['.js', '.json', '.vue']
        }
    },
    devServer: {
        // proxy: {
        //     '/yili': {
        //         target: 'http://d52eb-56.pospal.cn',
        //         changeOrigin: true,
        //         pathRewrite: {
        //             '/yili': ''
        //         }
        //     }
        // },
        before: function (app, server, compiler) {
            app.get('/list', function(req, res){
                res.json(JSON.parse(data))
            })
        }
    }
}