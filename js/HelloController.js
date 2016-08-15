var hello = angular.module('hello', []);

hello.controller('HelloController', function ($scope, $rootScope){
	$rootScope.menuUrl = 'partials/controllerMenu.html';

	$scope.name = 'HelloController';

	$scope.getName = function() {
		return $scope.name;
	};
	
	$scope.clickName = function() {
		alert('HELLO CLICK: '.concat($scope.name));
	};
});