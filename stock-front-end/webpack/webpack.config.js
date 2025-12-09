// webpack/webpack.config.js
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',

  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8000',
    'webpack/hot/dev-server',
    'babel-polyfill',
    'xlsx',
    'file-saver',
    path.resolve(__dirname, '../src/index.js')
  ],

  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: 'app.[hash].js'
  },

  devtool: 'eval',

  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, '../dist'),
    port: 8000,
    host: '0.0.0.0',
    historyApiFallback: true,
    disableHostCheck: true,
    stats: 'minimal'
  },

  // ✅ ตรงนี้คือที่คุณต้องใส่ resolve
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [path.resolve(__dirname, '../src'), 'node_modules'],
    alias: {
      assets:      path.resolve(__dirname, '../src/assets'),
      components:  path.resolve(__dirname, '../src/components'),
      helpers:     path.resolve(__dirname, '../src/helpers'),
      hooks:       path.resolve(__dirname, '../src/hooks'),
      stores:      path.resolve(__dirname, '../src/stores'),
      styles:      path.resolve(__dirname, '../src/styles'),
      utils:       path.resolve(__dirname, '../src/utils'),
      views:       path.resolve(__dirname, '../src/views'),
      config:      path.resolve(__dirname, '../src/config'),
      // ชิม react-qr-reader (กันชนกับ React 18)
      'react-qr-reader': path.resolve(__dirname, '../src/shims/react-qr-reader.js')
    }
  },

  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          'css-loader',
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: { sourceMap: true }
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: [
          'file-loader?name=assets/images/[name].[ext]',
          {
            loader: 'image-webpack-loader',
            query: {
              mozjpeg: { progressive: true },
              gifsicle: { interlaced: false },
              optipng: { optimizationLevel: 4 },
              pngquant: { quality: '75-90', speed: 3 }
            }
          }
        ]
      },
      { test: /\.woff2?(\?v=\d+\.\d+\.\d+)?$/, use: 'url-loader?limit=10000&mimetype=application/font-woff' },
      { test: /\.(ttf|eot|ico)(\?v=\d+\.\d+\.\d+)?$/, use: 'file-loader' },
      { test: /\.svg$/, use: [{ loader: 'svg-url-loader', options: { limit: 10000 } }] }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      hash: false,
      template: path.resolve(__dirname, '../public/index.html')
    }),
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en|th/)
  ],

  node: { fs: 'empty' },

  externals: [{ './cptable': 'var cptable' }, { './jszip': 'jszip' }]
};
