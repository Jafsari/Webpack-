var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')

const VENDOR_LIBS = [
'react','lodash','redux','react-redux','react-dom','faker','react-input-range','redux-form',
'redux-thunk'
];

module.exports = {
  entry: { // There will be multiple entry points now
      bundle:'./src/index.js',//For the bundle.js file, start here
      vendor: VENDOR_LIBS // Seperate bundle/file for all the dependencies
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  module:{
  	rules:[{
  		use: 'babel-loader',
  		test: /\.js$/,
  		exclude:/node_modules/
    },
      {
        use:['style-loader','css-loader'],
        test:/\.css$/
      }
    ]
  },
  plugins:[ 
    new webpack.optimize.CommonsChunkPlugin({ // Look at the total sum of all the project files
      name:'vendor' // If any of the dependencies in vendor and bundle.js overlap,
      // add them only to the vendor file
    }),
    new HtmlWebpackPlugin({
      template:'src/index.html' //generate our existing html document
      // automatically generates script tags for us, as we add more 
    }) 
  ]
};
