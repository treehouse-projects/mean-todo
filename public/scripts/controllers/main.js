'use strict';

angular.module('todoListApp')
.controller('mainCtrl', function($scope, dataService){

  dataService.getTodos(function(response){
    var todos = response.data.todos.todosList;  
    $scope.todos =  todos;
  });

  $scope.addTodo = function() {
    $scope.todos.unshift({name: 'This is a new todo.',
                      completed: false});
  };

});
