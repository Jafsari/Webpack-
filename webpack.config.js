const path = require('path')

const config = {
entry:'./src/index.js', //entry point when the app boots up
output:{
    path: path.resolve(__dirname,'build'), // Making sure it's the correct path
    //__dirname is a reference to the current working directory.
    // Whenever webpack runs, save the file, call it bundle.js inside of the path of the
    // project directory, as a file called 'build'
    filename: 'bundle.js' // What the filename will be when essentially combining
    // all the files together
  },
  module: {
    rules :[
      {
        use:'babel-loader',
        test: /\.js$/ // looks for files that end with .js, If so, babel will be applied
      },
      {
        use:['style-loader','css-loader'],
        //The style loader takes the CSS imports and adds them to the HTML document
        //The css loader knows how to deal with CSS imports
        test: /\.css$/
      }
     ]
  }
};

module.exports = config;