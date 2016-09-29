'use strict';

var angular = require('angular');

angular.module('todoListApp')
.controller('mainCtrl', function($scope, $log, $interval, dataService){

  $scope.seconds = 0;

  $scope.counter = function(){
    $scope.seconds++;
    $log.error($scope.seconds + ' have passed');
  };

  $interval($scope.counter, 1000, 10);

  dataService.getTodos(function(response){
    var todos = response.data;
    $scope.todos =  todos;
  });

  $scope.addTodo = function() {
    $scope.todos.unshift({name: 'This is a new todo.',
                      completed: false});
  };

});
