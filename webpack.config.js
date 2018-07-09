const MODE = process.env.MODE

module.exports = {
  mode: MODE,
  entry: "./src/index.js",
  output: {
    path: `${ __dirname }`,
    filename: "index.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(gif|png|jpg|svg)/,
        loader: "url-loader"
      }
    ]
  }
}
