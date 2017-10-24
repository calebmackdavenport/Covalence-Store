angular.module('store.controllers', ['ngRoute', 'ngResource'])
.controller('WelcomeController', ['$scope', function($scope) {
    $scope.message = "Hello from Angular";
}]);