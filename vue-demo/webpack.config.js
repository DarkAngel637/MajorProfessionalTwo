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