var app = angular.module('app', ['ngRoute', 'simple', 'hello']);

app.config(function ($routeProvider) {
	log('Route provider: ' + $routeProvider);

    $routeProvider
    .when('/',
    {
        controller: '',
        templateUrl: 'partials/withoutController.html'
    })
    .when('/simple',
    {
        controller: 'SimpleController',
        templateUrl: 'partials/withSimpleController.html'
    })
    .when('/hello',
    {
        controller: 'HelloController',
        templateUrl: 'partials/withHelloController.html'
    })    
    .otherwise({ redirectTo: '/' });
});

app.controller('App', function($scope, $rootScope){
	$rootScope.menuUrl = 'partials/generalMenu.html';
});

simple.factory('SimpleFactory', simpleFactory);
simple.service('SimpleService', simpleService);

hello.factory('SimpleFactory', simpleFactory);
hello.service('SimpleService', simpleService);

function genericClick() {
    alert('ciao da genericClick');
};

function log(text){
    var date = new Date();
   	var time = date.getTime();
   	console.log(date + ' - ' + time + ' >>> ' + text);
};


