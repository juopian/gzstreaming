var path = require('path')


module.exports = {
    entry : {
      'index': path.join(__dirname, 'src/index.js'),
      'play': path.join(__dirname, 'src/play.js'),
    },

    output: {
      path : path.join(__dirname, 'build') ,
      filename : '[name].js'
    },

    module: {
        loaders:[{
            test: /\.js[x]?$/i,
            loader: 'babel-loader',
            exclude: /node_modules/,
          },{
            test: /\.css$/,
            loaders: ['style-loader','css-loader'] 
        }],
    },
    externals: {
          "react": "React"
      },
}

