const webpack=require('webpack');
const HtmlWebpackPlugin=require('html-webpack-plugin');


const OpenBrowserPlugin = require('open-browser-webpack-plugin');
module.exports = {
  //entry:  __dirname + "/js/a.js",//已多次提及的唯一入口文件
  entry:{
  	aA:__dirname + "/js/a1.js",
  	bB:__dirname + "/js/a2.js",
  },
  output: {
    path: __dirname + "/dist",//打包后的文件存放的地方
    //filename: "dist.js"//打包后输出文件的文件名
    filename: "[name].js"//打包后输出文件的文件名
  },
  module: {
	  rules: [
	    {
	      test: /\.js$/,
	      exclude: /(node_modules|bower_components)/,
	      use: {
	        loader: 'babel-loader',
	        options: {
	          presets: ['@babel/preset-env']
	        }
	      }
	    }
	  ]
  },
  devServer: {
  inline:true,
  port: 804
},
  plugins:[
  	new webpack.optimize.UglifyJsPlugin(),
    new OpenBrowserPlugin({url:'http://localhost:804'}),
  	//new HtmlWebpackPlugin({template:'./src/index.html'}),
  	new HtmlWebpackPlugin({filename:'index.html',title:'index',template:'./src/index.html',chunks:['aA']}),
  	new HtmlWebpackPlugin({filename:'index2.html',title:'index2',template:'./src/index2.html',chunks:['bB']})
  ]
}

