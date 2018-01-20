const merge = require("webpack-merge");
const common = require("./webpack.common");
const FlowStatusWebpackPlugin = require("flow-status-webpack-plugin");

module.exports = merge(common, {
  devtool: "inline-source-map",

  devServer: {
    contentBase: srcPath,
    port: 8000,
    hot: true,
    historyApiFallback: true,
    open: true
  },

  plugins: [
    new FlowStatusWebpackPlugin({
      onSuccess: function(stdout) {
        console.log(stdout);
      },
      onError: function(stdout) {
        console.error(stdout);
      }
    })
  ]
});
