angular.module('store.controllers', [])
.controller('WelcomeController', ['$scope', 'SEOService', '$location', function($scope, SEOService, $location) {
    SEOService.setSEO({
        title: 'Covalence Store',
        url: $location.url(),
        description: 'Welcome to the Covalence Store'
    })
}])
.controller('ApparelController', ['$scope', 'Apparel', 'SEOService', '$location', function($scope, Apparel, SEOService, $location) {
    $scope.apparels = Apparel.query();
    SEOService.setSEO({
        title: 'Apparel Page',
        url: $location.url(),
        description: 'Covalence Store - Apparel'
    })
}])
.controller('MiscController', ['$scope', 'Misc', 'SEOService', '$location', function($scope, Misc, SEOService, $location) {
    $scope.miscs = Misc.query();
    SEOService.setSEO({
        title: 'Covalence Store - Misc',
        url: $location.url(),
        description: 'Covalence Misc'
    })
}])
.controller('SingleItemController', ['$scope', '$rootScope', 'Product', 'SEOService', '$location', '$routeParams', function($scope, $rootScope, Product, SEOService, $location, $routeParams) {
    $scope.product = Product.get({id: $routeParams.id});
    
        SEOService.setSEO({
                title: $scope.product.title,
                url: $location.url(),
                description: 'Covalence Store'
        });
}])
.controller('ProductsController', ['$scope', '$rootScope', 'Product', 'SEOService', '$location', '$routeParams', function($scope, $rootScope, Product, SEOService, $location, $routeParams) {
    $scope.product = product.query();
        SEOService.setSEO({
            title: $scope.product.title,
            url: $location.url(),
            description: 'Covalence Store'
});
}])
.controller('ContactUsController', ['$scope', 'SEOService', 'Email', '$location', function($scope, SEOService, Email, $location) {
     $scope.contact = function() {
        var e = new Email ({
            name: $scope.name,
            email: $scope.email,
            message: $scope.message
        });
        e.$save(function(success) {
            location.replace('/');
            alert('Thanks you for contacting us!')
        });
    }
    SEOService.setSEO({
            title: 'Contact Us',
            url: $location.url(),
            description: 'Contact the Covalence Store'
    });
}])
.controller('CheckoutController', ['$scope', '$rootScope', '$location', 'Checkout', 'SEOService', function($scope, $rootScope, $location, Checkout, SEOService) {
    SEOService.setSEO({
        title: 'Covalence Store - Checkout',
        url: $location.url(),
        description: 'Checkout from the Covalence Store!'
    })
}])
.controller('CartController', ['$scope', '$location', function($scope, $location) {
    SEOService.setSEO({
        title: 'Covalence Store - Cart',
        url: $location.url(),
        description: 'Checkout from the Covalence Store!'
    })
}]);