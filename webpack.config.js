var webpack = require('webpack'),
  path = require('path');

module.exports = {
  context: __dirname + '/app', //tells webpack where the app source code lives
  entry: { //define the entry. the first file that webpack loads. same as 'main' in package.json
    app: './app.js',
    vendor: ['angular']
  },
  output: { //our bundle will go here when webpack is done
    path: __dirname + '/public/scripts', //throw todo.bundle.js into public/scripts folder.
    filename: 'todo.bundle.js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */'vendor', /* filename= */'vendor.bundle.js')
  ]
};
