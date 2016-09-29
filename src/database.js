'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mean-todo', function(err){
  if(err){
    console.log('failed connecting to mongodb!');
  } else {
    console.log('successfuly connected to mongodb');
  }
});
