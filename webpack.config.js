const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const config = {
entry:'./src/index.js', //entry point when the app boots up
output:{
    path: path.resolve(__dirname,'build'), // Making sure it's the correct path
    //__dirname is a reference to the current working directory.
    // Whenever webpack runs, save the file, call it bundle.js inside of the path of the
    // project directory, as a file called 'build'
    filename: 'bundle.js', // What the filename will be when essentially combining
    // all the files together
    publicPath: 'build/'
  },
  module: {
    rules :[
      {
        use:'babel-loader',
        test: /\.js$/ // looks for files that end with .js, If so, babel will be applied
      },
      {
        loader: ExtractTextPlugin({
          loader: 'css-loader'
        }),
        test: /\.css$/
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/, // Basically ,if it's an image
        use: [
        {
          loader: 'url-loader',
          options: { limit: 40000 } // If the image is greater than 40,000, don't save it into bundle.js
          // Save it into a seperate file
        }, // This is used second
        'image-webpack-loader' // This is used first, compresses the image.
        ]
      }
     ]
  },
  plugins: [
    new ExtractTextPlugin('style.css') // Grab all the files that were caught by the loader
    // and save it to a file style.css
  ]
};

module.exports = config;