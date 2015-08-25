# Angualr Study

## 실행환경 준비
* sudo npm install http-server -g
* http-server .

## 3주차 스터디 내용
* 지난주 복습
* 즉시 실행함수 
	* (function () {console.log("123");})();
* ngRoute
* Directive
	* DOM 생성
	* $compile('html string...')($scope); <- Link 까지 한큐에 
	* 61페이지 참조 풀어서 하면: -> $compile, $link, element.append(template);
	* var testFunc = function(outerParam) {console.log("outer: " + outerParam); return function(innerParam) {console.log("inner: "+ innerParam)};}
	* testFunc(1)(2);
* template element vs instance element
* prelink vs postlink 
	* http://www.jvandemo.com/the-nitty-gritty-of-compile-and-link-functions-inside-angularjs-directives/

## 참고 자료
* http://www.slideshare.net/bmihaylov/the-angularjs-way
* https://github.com/timjacobi/angular-education
* http://teropa.info/blog/2013/11/03/make-your-own-angular-part-1-scopes-and-digest.html
