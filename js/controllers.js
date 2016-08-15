var app = angular.module('app', ['ngRoute', 'simple', 'hello']);

app.config(function ($routeProvider) {

    alert('Route Provider:' + $routeProvider);

    $routeProvider
    .when('/',
    {
        controller: 'menu',
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

app.controller('menu', function($scope){
	$scope.menuUrl = 'partials/menuGenerale.html';
});

function genericClick() {
    alert('ciao da genericClick');
}



