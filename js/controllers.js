var app = angular.module('app', ['simple', 'hello']);
var simple = angular.module('simple', []);
var hello = angular.module('hello', []);

simple.controller('SimpleController', function ($scope){
	$scope.name = "SimpleController";
	$scope.vendors = [{name:'Simone',city:'Trento',debt:'180.01',birthDate:'1088323623006'},{name:'Andrea',city:'Verona',debt:'13441.80',birthDate:'1888323623006'}];

	$scope.getName = function() {
		return $scope.name;
	};

	$scope.clickName = function() {
		alert('SIMPLE CLICK: '.concat($scope.name));
	};

});

hello.controller('HelloController', function ($scope){
	$scope.name = "HelloController";

	$scope.getName = function() {
		return $scope.name;
	};
	
	$scope.clickName = function() {
		alert('HELLO CLICK: '.concat($scope.name));
	};
});

function genericClick(){
	alert('ciao da genericClick');
}

