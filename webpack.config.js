const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { VueLoaderPlugin } = require("vue-loader")

const mode = process.env.NODE_ENV || 'development';

const devMode = mode === 'development';

const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined

module.exports = {
    mode,
    target,
    devtool,
    devServer: {
        open: true,
        hot: true,
    },
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        filename: 'index.[contenthash].js',
        assetModuleFilename: 'assets/[name][ext]'
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src', 'index.html')
        }),
        new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css'
    })],
    module: {
        rules: [
          {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                loader: {
                    scss: 'vue-style-loader!css-loader!sass-loader'
                }
           }
          },
          {
            test: /\.html$/i,
            loader: "html-loader",
          },
          {
            test: /\.(c|sa|sc)ss$/i,
            use: [
                devMode ? "style-loader" : MiniCssExtractPlugin.loader,
                "css-loader",
                {
                    loader: "postcss-loader",
                    options: {
                        postcssOptions: {
                            plugins: [require('postcss-preset-env')]
                        }
                    }
                },
                "sass-loader"
            ],
          },
          {
            test: /\.(?:js|mjs|cjs)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env', { targets: "defaults" }]
                ]
              }
            }
          },
          {
            test: /\.(jpg|png|svg|jpeg|gif|webp)$/,
            type: 'asset/resource'
          }
        ],
      },
}