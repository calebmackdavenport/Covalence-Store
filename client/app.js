angular.module('store', [
    'ngRoute',
    'store.controllers'
])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/welcome.html',
        controller: 'WelcomeController'
    })
    .otherwise({
        redirectTo: '/'
    });
}]);