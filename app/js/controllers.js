var app = angular.module('happyOrSad');

app.controller('mainController', ['$scope', 'getUserInput', 'calc', function($scope, getUserInput, calc){
	self = $scope;
	self.getUserInput = getUserInput;
	self.calc = calc;
}]);