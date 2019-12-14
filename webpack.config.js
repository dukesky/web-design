const path = require('path')
const postCSSPlugins = [
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer'),
    require('postcss-import')
 ]

module.exports = {
    entry: './app/assets/script/App.js',
    output:{
        filename: 'bundled.js',
        path: path.resolve(__dirname,'app')
    },
    devSever: {
        contentBase: path.join(__dirname,'app'),
        hot: true,   /* how mo*/
        port : 3000

    },

    mode: 'development',
    
    module: {
        rules: [
            {test: /\.css$/i,
             use: ['style-loader', 'css-loader?url=false', {loader: 'postcss-loader', options: {plugins: postCSSPlugins}}]
            }
        ]
    }
}