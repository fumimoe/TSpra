const path = require("path");

// webpackの宣言{}の中に記載する
module.exports = {
  entry: {
    bundle: "./src/index.ts",
  },
  output: {
    // dirnameはrootを指す、それとdistをjoinすることでそこに出力先を示す
    path: path.join(__dirname, "dist"),
    // bandle.jsという形でdistに出力する
    filename: "[name].js",
  },
  resolve: {
    // 拡張子を記載しなくていい
    extensions: [".ts", ".js"],
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    open: true,
  },
  module: {
    rules: [
      {
        loader: "ts-loader",
        test : /\.ts$/
      },
    ],
  },
};
