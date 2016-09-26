'use strict';

angular.module('todoListApp')
.directive('todo', function(){
  return {
    templateUrl: 'templates/todo.html',
    replace: true,
    controller: 'todoCtrl'
  }
});