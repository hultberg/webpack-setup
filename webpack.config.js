var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var FileLoader = require('file-loader');

function resolvePath(str) {
  return path.join(__dirname, str);
}

module.exports = {
    entry: resolvePath('src/index.js'),
    output: {
      filename: 'js/app.js',
      path: resolvePath('public'),
    },
    resolve: {
      modules: [
        resolvePath('src'),
        'node_modules',
      ],
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        /*new webpack.optimize.UglifyJsPlugin({/assets/components/library/jquery/jquery.min.js?v=v1.2.3
            minimize: false
        }),*/
        new webpack.DefinePlugin({
            "require.specified": "require.resolve"
        }),
        new ExtractTextPlugin({
            filename: 'css/style.css',
            allChunks: true
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    use: "css-loader",
                })
            },
            {
                test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                use: "file-loader?name=/fonts/[name].[ext]"
            },
            {
                test: require.resolve('jquery'),
                use: [
                    {
                        loader: 'expose-loader',
                        query: 'jQuery'
                    },
                    {
                        loader: 'expose-loader',
                        query: '$'
                    }
                ]
            }
        ]
    }
};
