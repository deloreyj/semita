angular.module('semita', []);

angular.module('semita')
	.controller('MainController', ['$scope', function ($scope) {
    $scope.stringOne = 'this is string one';
    $scope.stringTwo = 'this is string two';
    $scope.stringThree = 'this is string three';
    $scope.stringFour = 'this is string four';
  }]);