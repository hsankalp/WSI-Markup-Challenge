(function() {
    'use strict';

    angular
        .module('app', ['ui.bootstrap', 'ngAnimate', 'ngRoute'])
        .config(moduleConfig)

    moduleConfig.$inject = ['$routeProvider'];

    // Using ngRoute to route to different templates using the urls mentioned

    function moduleConfig($routeProvider) {

        $routeProvider
            .when("/", {
                templateUrl: 'app/views/home.tmpl.html'
            })
            .when("/cookware", {
                templateUrl: 'app/views/cookware.tmpl.html'
            })
            .when('/cooks-tools', {
                templateUrl: 'app/views/cooks-tools.tmpl.html'
            })
            .when('/cutlery', {
                templateUrl: 'app/views/cutlery.tmpl.html'
            })
            .when('/electronics', {
                templateUrl: 'app/views/electronics.tmpl.html'
            })
            .when('/bakeware', {
                templateUrl: 'app/views/bakeware.tmpl.html'
            })
            .when('/food', {
                templateUrl: 'app/views/food.tmpl.html'
            })
            .when('/tabletop-glassware-bar', {
                templateUrl: 'app/views/tabletop-glassware-bar.tmpl.html'
            })
            .when('/homekeeping', {
                templateUrl: 'app/views/homekeeping.tmpl.html'
            })

            //Hard Coding the route here because of the single product. Usually we send the id in the url to get the product.
            .when('/homekeeping/apron/1', {
                templateUrl: 'app/views/apron-details.tmpl.html',
                controller: 'ProductInfoController',
                controllerAs: 'vm'
            })
            .when('/outdoor', {
                templateUrl: 'app/views/outdoor.tmpl.html'
            })
            .when('/sale-special-offer', {
                templateUrl: 'app/views/sale-special-offer.tmpl.html'
            })
            .otherwise({
                redirectTo: "/"
            })
    }


})();
