'use strict';

var express = require('express');
var parser = require('body-parser');
var router = require('./api');

var app = express(); //create an instance of the express server

require('./database');
require('./seed');

app.use('/', express.static('public')); //tells express to serve static files from the public folder
app.use(parser.json());

app.use('/api', router);

app.listen(3000, function(){
  console.log('running on port 3000');
});
