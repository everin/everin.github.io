var hello = angular.module('hello', []);

hello.controller('HelloController', function ($scope){
	$scope.name = 'HelloController';

	$scope.getName = function() {
		return $scope.name;
	};
	
	$scope.clickName = function() {
		alert('HELLO CLICK: '.concat($scope.name));
	};
});