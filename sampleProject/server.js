const express = require('express');
const path = require('path')


// ADD addition routes over here, Define them before the webpack configuration. Auth etc....
app.get('/',(req,res) => {
  res.send({hello: 'create auth'})
})

const app = express();
if (process.env.NODE_ENV !== 'production'){
const webpackMiddleware = require ('webpack-dev-middleware') // handles incoming requests
const webpack = require('webpack') // compile application assets
const webpackConfig = require('./webpack.config.js') // instructs webpack how to run
app.use(webpackMiddleware(webpack(webpackConfig)));
} else {
  app.use(express.static('dist')) //opens up the dist directory for the client
  app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname,'dist/index.html')) // sends back the file
  })
}

app.listen(process.ENV.PORT || 3050,() => console.log('listening'));