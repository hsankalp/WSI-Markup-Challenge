(function() {
  'use strict';

  angular
    .module('app')

    /* Although service was not required for this coding challenge, 
    but when working with a backend, we would ususally add a service to make 
    the http requests to the backend which is lazily initialized and responds 
    with a json object. Here I have created a product.json file just to show 
    how it would work with a backend */

    .service('productService', productService);

  productService.$inject = ['$http', '$q'];

  function productService($http, $q) {

    var self = this;

    self.getProduct = getProduct;

    /* Using $http's in built promises to make the http requests
    which promises a response back */

    function getProduct() {
      return $http.get('data/product.json')
        .then(successFn, errorFn);
    }

    //promise success returns the response data to the controller

    function successFn(response) {
      return response.data;
    }

    //promise error returns the response status to the controller

    function errorFn(response) {
      return $q.reject('ERROR: ' + response.statusText);
    }

  }

})();