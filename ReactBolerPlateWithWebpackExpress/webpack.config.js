module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/public',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './public',
  },  
  module: {
    rules: [
          {
            test: /\.(js|jsx|es)$/,
            exclude: [/[\\\/]node_modules/],
            loader: 'babel-loader'
          },
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          }
        ]
  },
  // resolve : {
  //   fallback: { 
  //     "path": false,
  //     "utils":false,
  //     "util":false,
  //     "crypto":false,
  //     "buffer":false,
  //     "https":false,
  //     "http":false,
  //     "url":false,
  //     "vm":false,
  //     "querystring":false,
  //     "os":false,
  //     "stream":false,
  //     "constants":false,
  //     "assert":false,
  //     "fs":false,
  //     "worker_threads":false,
  //     "child_process":false
  //   }
  // }
};