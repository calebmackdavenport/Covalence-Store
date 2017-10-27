angular.module('store', [
    'ngRoute',
    'ngResource',
    'store.factories',
    'store.controllers', 
    'store.services',
    'store.directives'
])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
    .when('/', {
        templateUrl: 'views/welcome.html',
        controller: 'WelcomeController'
    })
    .when('/apparel', {
        templateUrl: 'views/apparel.html',
        controller: 'ApparelController'
    })
    .when('/misc', {
        templateUrl: 'views/misc.html',
        controller: 'MiscController'
    })
    .when('/contactus', {
        templateUrl: 'views/contact.html',
        controller: 'ContactUsController'
    })
    .when('/checkout', {
        templateUrl: 'views/checkout.html',
        controller: 'CheckoutController'
    })
    .when('/cart', {
        templateUrl: 'views/cart.html',
        controller: 'CartController'
    })
    .when('/:theid', {
        templateUrl: 'views/productList.html',
        controller: 'SingleProductController'
    })
    .otherwise({
        redirectTo: '/'
    });
}]);