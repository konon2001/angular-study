(function(){
'use strict';
angular.module('ToDoCtrls', ['ui.sortable'])
.controller('DefaultController', function($scope){
			$scope.myTodoTitile = "My Todo App!!!!!";
			$scope.notifyAlert = function() {
				alert($scope.myText);
			};
		})
	.controller('ToDoController', function($scope){
			$scope.todoText = "할 일 목록을 입력해 주세요...";
			$scope.itemList = [];
			$scope.isBtn = true;
			$scope.addItem = function() {
				$scope.itemList.push($scope.todoItem);
				$scope.todoItem = "";
			};
		})
;
})();