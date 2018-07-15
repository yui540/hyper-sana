const MODE = process.env.MODE

module.exports = {
  mode: MODE,
  node: {
    __dirname: false,
    __filename: false,
  },
  entry: "./src/index.js",
  output: {
    path: `${ __dirname }`,
    filename: "index.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          {
            loader: 'eslint-loader',
            options: {
              fix: false,
              failOnError: true
            }
          }
        ]
      },
      {
        test: /\.(gif|png|jpg|svg)/,
        loader: "url-loader"
      }
    ]
  }
}
