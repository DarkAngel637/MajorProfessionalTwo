const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    output: {
        publicPath: '/dist'
    },
    devServer: {
        open: true,
        host: '10.0.5.48'
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