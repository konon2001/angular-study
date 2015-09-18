# Angualr Study

## 실행환경 준비
* sudo npm install http-server -g
* http-server .
* sudo npm install -g express
* sudo npm install -g mongoose

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

## 5주차 스터디 내용
* 백엔드 API 개발
* Express
	* node.js에서 지원하는 고성능의 웹 프레임워크
	* 'express 폴더경로' 명령어로 express 어플리케이션 생성
* MongoDB
	* NoSQL 데이터베이스로 분류되는 몽고DB는 JSON과 같은 동적 스키마형 문서들을 선호
	* Node.js에서는 mongoose 모듈을 이용하여 컨트롤러와 연동
	* 모든 데이터 교환은 JSON 형태로 이루어짐

## 참고 자료
* http://www.slideshare.net/bmihaylov/the-angularjs-way
* https://github.com/timjacobi/angular-education
* http://teropa.info/blog/2013/11/03/make-your-own-angular-part-1-scopes-and-digest.html
