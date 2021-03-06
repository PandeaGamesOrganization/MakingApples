
var path = require('path');

module.exports = {
  entry: './src/js/script.js',
  output: {
    filename: 'bundle1.js',
    path: path.resolve(__dirname, 'dist'),
	publicPath:'makingApples/'
  },
    module: {
        rules: [
             { test: /\.json$/, loader: 'json-loader' },
             {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
              },
            {
                test: /\.html$/,
                use: [ {
                    loader: 'html-loader',
                    options: {
                    minimize: true,
                    removeComments: false,
                    collapseWhitespace: false
                    }
                }],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader?name=public/fonts/[name].[ext]'
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader", // creates style nodes from JS strings
                }, {
                    loader: "css-loader", // translates CSS into CommonJS
                }, {
                    loader: "less-loader", // compiles Less to CSS
                }]
            },
            {
                test: /\.css$/,
				use:"css-loader"
            }
        ]
    }, 
    node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};