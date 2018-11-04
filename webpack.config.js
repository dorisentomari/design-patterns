const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: './release/bundle.js'
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './index.html'
    })
  ],
  devServer: {
    // 根目录
    contentBase: path.join(__dirname, './release'),
    // 自动打开浏览器
    open: true,
    // 本地服务的端口
    port: 9000
  }
};