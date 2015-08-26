(function(){
	'use strict';
	angular
	.module('angular.study.testDirective',['angular.study.more'])
	.controller('TestDirectiveCtrl', function($scope) {
		$scope.outer = {text:"Out!!!!", no:10};
		$scope.inner = {text:"IN!!!", no:9};

		$scope.getData = function() {
			alert("Outer: " + JSON.stringify($scope.outer) + "\nInner: " + JSON.stringify($scope.inner));
		}
	});
})();