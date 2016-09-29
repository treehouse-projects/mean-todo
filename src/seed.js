'use strict';

var Todo = require('./models/todo.js');

var todos = [
  'run around in circles',
  'take nap',
  'take another nap'
];

todos.forEach(function(todo, index){
  Todo.find({'name': todo}, function(err, todos){
    if(!err && !todos.length){
      Todo.create({completed: false, name: todo});
    }
  });
});
