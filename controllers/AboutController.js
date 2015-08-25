(function(){
'use strict';
	angular
	.module('angular.study.about', ['angular.study.myDirectives'])
	.controller('AboutController', function($scope){
			this.titleStr = "About View....";
		});
})();