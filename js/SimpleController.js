var controllers = {};
var simple = angular.module('simple', ['ngRoute']);

controllers.SimpleController = function ($scope, $rootScope){
	$rootScope.menuUrl = 'partials/controllerMenu.html';

	$scope.name = 'SimpleController';
	$scope.vendors = [{name:'Simone',city:'Trento',debt:'180.01',birthDate:'1088323623006'},{name:'Andrea',city:'Verona',debt:'13441.80',birthDate:'1888323623006'}];

	$scope.getName = function() {
		return $scope.name;
	};

	$scope.clickName = function() {
		alert('SIMPLE CLICK: '.concat($scope.name));
	};
};

simple.controller(controllers);
