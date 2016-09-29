'use strict';

var mongoose = require('mongoose');

// our schema needs:
  // todo.name
  // todo.completed

//schema constructor
  // based on mock data that requires name and completed for checkbox (in angular todo.html)

var todoSchema = new mongoose.Schema({
  name: String,
  completed: Boolean
});


// mongo will create a model called todo using the todoSchema
var model = mongoose.model('Todo', todoSchema);

module.exports = model;
