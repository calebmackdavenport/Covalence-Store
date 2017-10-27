angular.module('store.controllers', [])
.controller('WelcomeController', ['$scope', 'SEOService', '$location', function($scope, SEOService, $location) {

    SEOService.setSEO({
        title: 'Covalence Store',
        url: $location.url(),
        description: 'Welcome to the Covalence Store'
    })

}])
.controller('ApparelController', ['$scope', 'Apparel', 'ProductByCatId', 'SEOService', '$location', function($scope, Apparel, ProductByCatId, SEOService, $location) {
    $scope.products = ProductByCatId.query({ id: 1 });

    SEOService.setSEO({
        title: 'Apparel Page',
        url: $location.url(),
        description: 'Covalence Store - Apparel'
    })
}])
.controller('MiscController', ['$scope', 'Misc', 'ProductByCatId', 'SEOService', '$location', function($scope, Misc, ProductByCatId, SEOService, $location) {
    $scope.products = ProductByCatId.query({ id: 2 });

    SEOService.setSEO({
        title: 'Covalence Store - Misc',
        url: $location.url(),
        description: 'Covalence Misc'
    })
}])
.controller('SingleProductController', ['$scope', '$rootScope', 'Product', 'SEOService', '$location', '$routeParams', function($scope, $rootScope, Product, SEOService, $location, $routeParams) {
    $scope.product = Product.get({id: $routeParams.id});
    
    if(localStorage.items === undefined) 
         localStorage.items = JSON.stringify([]);
    
    $scope.addItem = function() {
        alert('Item added to Cart!');
        let cachedItems = JSON.parse(localStorage.items);
        cachedItems.push($scope.product);
        localStorage.items = JSON.stringify(cachedItems);
        $rootScope.$broadcast("cartChanged");
    }

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
        if (localStorage.items === undefined)
            localStorage.items = angular.toJson([]);

        $scope.cart = angular.fromJson(localStorage.items);

        let total = 0;
        for (let i = 0; i < $scope.cart.length; i++) {
            total += $scope.cart[i].price;
        }
        $scope.total = total

        $scope.removeItem = function (product) {
            let index = $scope.cart.indexOf(product)

            if (index > -1) {
                $scope.cart.splice(index, 1);
            }

            localStorage.items = angular.toJson($scope.cart);
            $scope.total -= product.price;
            $rootScope.$broadcast("cartChanged");
        }

        let discountCode10 = 'notpayingthatforamug';
        let discountCode20 = 'groupprojectssuck';
        let discountsToBeApplied = 1;

        $scope.applyDiscount = function () {
            if ($scope.discountValue === discountCode10 && discountsToBeApplied >= 1) {
                $scope.total *= .9;
                discountsToBeApplied = 0;
            }

            if ($scope.discountValue === discountCode20 && discountsToBeApplied >= 1) {
                $scope.total *= .8;
                discountsToBeApplied = 0;
            }
        }


        var elements = stripe.elements();
        var card = elements.create('card');
        card.mount('#card-field');

        //sets length to 0 so that .length === 0, and will not show until an error is created
        $scope.errorMessage = '';

        $scope.processCheckout = function () {
            var fullname = String($scope.firstName) + " " + String($scope.lastName);
            stripe.createToken(card, {
                name: fullname,
                address_line1: $scope.line1,
                address_line2: $scope.line2,
                address_city: $scope.city,
                address_state: $scope.state,
                address_zip: $scope.zip,
                address_country: $scope.country
            }).then(function (result) {
                if (result.error) {
                    $scope.errorMessage = result.error.message;
                } else {
                    //result.token is the card token
                    var d = new Checkout({
                        token: result.token.id,
                        amount: $scope.total,
                        products: $scope.cart,
                        email: $scope.email
                    });
                    d.$save(function () {
                        $location.path('/apparel');
                        alert('Thank you for your purchase!');
                        localStorage.clear();
                        $rootScope.$broadcast("purchase");
                    }, function (err) {
                        console.log(err);
                    });
                }
            });
        }

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