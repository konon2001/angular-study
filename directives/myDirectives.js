(function(){
	'use strict';

	angular
		.module('angular.study.myDirectives', [])
		.directive('simpleDirective', function() {
      return {
        restrict: 'A',
        template: '<p>This is Simple Directive</p>'
      };
    })
    .directive('moreDirective', function() {
      return {
        restrict: 'EA',
        // replace: true,
        template: '<p>This is More Directive</p>'
      };
    });
})();

