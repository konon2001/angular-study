(function(){
'use strict';
	angular
	.module('angular.study.about', ['angular.study.myDirectives'])
	.controller('AboutController', function($scope){
			this.titleStr = "About View....";
			$scope.testData = "";

			$scope.$watch('testData', function(){
				var strArr = $scope.testData.split(' ');
				angular.forEach(strArr, function(val){
					if(val === "WoW") {
						alert("WoW");
					} else {
						console.log("No Wow!");
					}
				});
			});
		});
})();