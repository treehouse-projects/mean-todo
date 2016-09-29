'use strict';

var express = require('express');
var Todo = require('../models/todo');
// var todos = require('../../mock/todos.json');


var router = express.Router();

//first route for api
router.get('/todos', function(req, res){
  Todo.find({}, function(err, todos){
    if(err){
      res.status(500).json({message: err.message}); //500 is generic error response
    }
    res.json(todos);
  });
});



//post is used to send data to the server
router.post('/todos', function(req, res){
  var todo = req.body;
  Todo.create(todo, function(err, todo){
    if(err){
      return res.status(500).json({err: err.message});
    }
    res.json({todo: todo, message:'Todo Created'});
  });
});

router.put('/todos/:id', function(req, res){
  var id = req.params.id;
  var todo = req.body;
  if(todo && todo._id !== id){
    return res.status(500).json({err: 'Ids dont match'});
  }
  Todo.findByIdAndUpdate(id, todo, {new: true}, function(err, todo){
    if(err){
      return res.status(500).json({err: err.message});
    }
    res.json({todo: todo, message:'Todo Created'});
  });
});

//TODO: add DELETE route to delete entries

module.exports = router;
