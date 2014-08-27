'use strict';


angular.module('app', [
    'app.services',
    'app.directives',
    'app.controllers',
    'ngRoute',
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/login.htm', controller: 'ctrl_login'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);

var ctrl = angular.module('app.controllers', []);
var dir = angular.module('app.directives', []);
var serv = angular.module('app.services', []);


