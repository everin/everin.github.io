var hello = angular.module('hello', []);

hello.controller('HelloController', function ($scope, $rootScope, SimpleFactory, SimpleService){
	$rootScope.menuUrl = 'partials/controllerMenu.html';

	$scope.name = 'HelloController';

	$scope.getName = function() {
		return SimpleFactory.getName($scope.name);
	};
	
	$scope.clickName = function() {
		SimpleService.clickName($scope.name);
	};
});