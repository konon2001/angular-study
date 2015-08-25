(function(){
	'use strict';

	angular
		.module('MyToDo', [ 'ngCookies', 'ngResource', 'ngRoute', 'angular.study.todo', 'angular.study.about'])
		.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: './views/todo.html',
        controller: 'ToDoController'
      })
      .when('/about', {
        templateUrl: './views/about.html',
        controller: 'AboutController',
        controllerAs: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
})();

