const path = require('path');

module.exports = {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
    contentBase:'./dist'
  },
  module:{
    rules:[
      {
        test:/\.(scss|css)$/,
        use:[{
          loader:'style-loader'
        },{
          loader:'css-loader',
          options:{
            sourceMap:true
          }
        },{
          loader:'sass-loader',
          options:{
            sourceMap:true
          }
        }]
      },  //scss
      {
        test:/\.(png|svg|jpg|gif)$/,
        use:[
          'file-loader'
        ]
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
