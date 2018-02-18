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
  }
}

module.exports = config;