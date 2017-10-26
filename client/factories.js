angular.module('store.factories', [])
.factory('Product', ['$resource', function($resource) {
    return $resource('/api/products/:id', { id: '@id' });
}])
.factory('Apparel', ['$resource', function($resource) {
    return $resource('/api/apparel/:id', {id: '@id'}, {
    });
}])
.factory('Misc', ['$resource', function($resource) {
    return $resource('/api/misc/:id', {id: '@id'}, {
    });
}])
.factory('Category', ['$resource', function($resource) {
    return $resource('/api/categories/:id');
}])
.factory('Email', ['$resource', function($resource) {
    return $resource('/api/contact/:id');
}])
.factory('Checkout', ['$resource', function($resource) {
    return $resource('/api/checkout/:id');
}]);

