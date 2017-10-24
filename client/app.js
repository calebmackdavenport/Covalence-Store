angular.module('store', [
    'ngRoute',
    'ngResource',
    'store.controllers'
])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.when('/', {
        templateUrl: 'views/welcome.html',
        controller: 'WelcomeController'
    })
    .otherwise({
        redirectTo: '/'
    });
}]);