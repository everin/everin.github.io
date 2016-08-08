var simpleController =	function ($scope){
	$scope.name = "HelloController";
	$scope.hello = "Hello from HelloController";

	$scope.getName = function() {
		return $scope.name;
	};
};

var helloController = function ($scope){
	$scope.name = "HelloController";
	$scope.hello = "Hello from HelloController";

	$scope.getName = function() {
		return $scope.name;
	};
};

var firstController = function ($scope){
  // Initialize the model variables
  $scope.firstName = "John";
  $scope.lastName = "Doe";

  // Define utility functions
  $scope.getFullName = function () {
		return $scope.firstName + " " + $scope.lastName;
  };
};