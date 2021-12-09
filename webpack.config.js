const path = require("path");
const RefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  name: "webpack-setting",
  mode: "development", // 실서비스 : production
  devtool: "eval", // production : hidden-source-map
  resolve: {
    extensions: [".js", ".jsx"],
  },

  entry: {
    //제일 중요!
    app: "./index.js",
  }, // 입력
  output: {
    path: path.join(__dirname + "/dist/"), // 경로를 합쳐줌
    filename: "bundle.js",
  }, // 출력
  // entry에 있는 파일을 읽고 module을 적용한 후 output
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {
                  browsers: ["> 1% in KR"], // browserslist
                },
                debug: true,
              },
            ],
            "@babel/preset-react",
          ],
          plugins: [
            "@babel/plugin-proposal-class-properties",
            "react-refresh/babel",
          ],
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true },
          },
        ],
      },
    ],
  },

  plugins: [
    //빌드 할때마다 실행됨
    new RefreshWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: "./public/index.html", // public/index.html 파일을 읽는다.
      filename: "index.html", // output으로 출력할 파일은 index.html 이다.
    }),
  ],
  devServer: {
    static: { directory: path.resolve(__dirname, "public") }, //실제로 존재하는 정적 파일들의 경로
    devMiddleware: { publicPath: "/dist/" },
    open: true,
    port: 3000,
    hot: true,
  },
};
