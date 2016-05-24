angular.module('semita', []);

angular.module('semita')
	.controller('MainController', ['$scope', function ($scope) {
        $scope.greeting = 'test';
        console.log('this');
      }]);