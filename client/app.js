angular.module('store', [
    'ngRoute',
    'ngResource',
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
    .when('/products', {
        templateUrl: 'views/productList.html',
        controller: 'ProductsController'
    })
    .when('/contactus', {
        templateUrl: 'views/contact.html',
        controller: 'ContactUsController'
    })
    .when('/:id', {
        templateUrl: 'views/singleProduct.html',
        controller: 'SingleItemController'
    })
    .when('/checkout', {
        templateUrl: 'views/checkout.html',
        controller: 'CheckoutController'
    })
    .when('/cart', {
        templateUrl: 'views/cart.html',
        controller: 'CartController'
    })
    .otherwise({
        redirectTo: '/'
    });
}]);