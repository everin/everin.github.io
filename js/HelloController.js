(function(angular) {
	'use strict';
	angular.module('controllerExample', []).controller('HelloController', ['$scope', HelloController]);

	function HelloController($scope){
		$scope.name = "HelloController";
		$scope.hello = "Hello from HelloController";

		$scope.getName = function() {
			return name;
		};
	}
})(window.angular);