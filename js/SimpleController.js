(function(angular) {
	'use strict';
	angular.module('controllerExample', []).controller('SimpleController', ['$scope', SimpleController]);

	function SimpleController($scope) {
		$scope.name = "SimpleController";
		$scope.vendors = [{name:'Simone',city:'Trento',debt:'180.01',birthDate:'1088323623006'},{name:'Andrea',city:'Verona',debt:'13441.80',birthDate:'1888323623006'}];

		$scope.getName = function() {
			return name;
		};
	}
})(window.angular);