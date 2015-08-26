(function(){
	'use strict';

	angular
		.module('angular.study.more', [])
		.directive('innerDom', function() {
      return {
        restrict: 'A',
        scope: {
          innerText: "@innerText",
          innerNo: "@innerNo"
        },
        template: '<p>Inner Text: {{innerText}}</p>' +
        '<p>Inner Number: {{innerNo}}</p>'
      };
    })
    .directive('outerDom', function() {
      return {
        restrict: 'EA',
        // replace: true,
        scope: {
          outerText: "@outerText",
          outerNo: "@outerNo",
          innerText: "@innerText",
          innerNo: "@innerNo"
        },
        template: '<p>Outer Text: {{outerText}}</p>' +
        '<p>Outer Number: {{outerNo}}</p>' +
        '<div inner-dom inner-text="{{innerText}}" inner-no="{{innerNo}}"></div>'
      };
    });
})();

