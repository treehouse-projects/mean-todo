'use strict';

var angular = require('angular');

angular.module('todoListApp', []);

require('./scripts/controllers/main.js');

require('./scripts/controllers/todo.js');

require('./scripts/services/data.js');

require('./scripts/directives/todo.js');
