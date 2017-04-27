var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
// import HtmlWebpackPlugin from  'html-webpack-plugin';
module.exports={
    entry:'./src/components/GalleryByReactApp.js',
    output: {
        path: __dirname + "/build",
        filename: "[name]-[hash].js"
    },
    devtool: 'eval-source-map',
    module:{
        loaders:[
            {
                test:/\.css$/,
                loader:'style-loader!css-loader'
            },
            {
                test:/\.js$/,
                loader:'react-hot-loader!babel-loader',exclude:/node_modules/
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!autoprefixer-loader{browsers:["last 2 version"]}!less-loader'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            }
        ]
    },



    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: function () {
                    return [precss, autoprefixer];
                },
                devServer: {
                    contentBase: __dirname, //本地服务器所加载的页面所在的目录
                    colors: true, //终端中输出结果为彩色
                    historyApiFallback: true, //不跳转
                    inline: true //实时刷新
                }
            }
        }),
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
        }),
        new ExtractTextPlugin("styles.css"),
        new webpack.HotModuleReplacementPlugin()//热加载插件
    ],

}