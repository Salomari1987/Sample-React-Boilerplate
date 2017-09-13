const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

paths = {
  js: path.join(__dirname, './client'),
  dist: path.join(__dirname, './dist')
};

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.join(__dirname, './client/index.html'),
  path: paths.dist,
  filename: 'index.html',
  minify: {
    collapseWhitespace: true,
    minifyCSS: true,
    minifyJS: true,
    removeComments: true,
    useShortDoctype: true
  }
});

const devServer = {
  contentBase: paths.js,
  historyApiFallback: true,
  port: 3000,
  compress: false,
  inline: true,
  hot: true,
  host: '0.0.0.0',
  disableHostCheck: true,
  overlay: true,
  stats: {
    assets: true,
    children: false,
    chunks: false,
    hash: false,
    modules: false,
    publicPath: false,
    timings: true,
    version: false,
    warnings: true,
    colors: true
  }
};


module.exports = {
  context: paths.js,
  watch: true,
  entry: ['react-hot-loader/patch', path.join(paths.js, 'index.jsx')],
  output: {
    path: paths.dist,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
    modules: [
      path.join(__dirname, './node_modules'),
      paths.js,
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig,
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer
};
