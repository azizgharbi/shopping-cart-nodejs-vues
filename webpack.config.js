const path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './public/script.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/dist')
  },
  watch: true,
  plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        jquery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default'],
      })
  ],
  module: {
    loaders: [
        { test: /\.css$/, loader: "style-loader!css-loader" },
        { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
    ]
},
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  }
};