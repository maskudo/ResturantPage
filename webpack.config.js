const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    mode: 'development',
    module: {
        rules: [
            {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            }

        ]
        },
  entry: { 
      index: path.resolve(__dirname, "src", "index.js") 
    },

  output: {
    path: path.resolve(__dirname, "dist")
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html")
    })
  ]

  
};