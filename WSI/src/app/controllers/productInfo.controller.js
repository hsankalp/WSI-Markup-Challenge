(function() {
    'use strict';

    angular
        .module('app')

        //controller binds the view to the model

        .controller('ProductInfoController', ProductInfoController);

    ProductInfoController.$inject = ['productService', '$uibModal'];

    function ProductInfoController(productService, $uibModal) {

        //using view-model to bind the model and the view 
        var vm = this;

        //defining selectedImg as 0 which is the index for the first image in the images array of the product
        vm.selectedImg = 0;

        vm.changeImg = changeImg;
        vm.addToCart = addToCart;

        init();

        function init() {

            //Calling Service to get the data, would generally pass the product id to get the data from the backend
            productService
                .getProduct()
                .then(function(product) {
                    vm.product = product;

                }, function(error) {
                    //Can add push notifications for error handling
                    console.log(error);
                })

        }

        //changeImg function will change the index of the image based on the smaller image selected

        function changeImg(position) {
            vm.selectedImg = position;
        }

        /* created a modal to display the item added to the cart, takes image, color and quantity 
        as input from the html based on the color and quantity selected */

        function addToCart(img, color, qty) {

            var modalInstance = $uibModal.open({
                templateUrl: 'app/views/cartView.tmpl.html',
                controller: function($uibModalInstance, cartItem){
                  var vm = this;
                  vm.cartItem = cartItem;
                },
                controllerAs: 'vm',
                size: 'lg',
                resolve: {
                    cartItem: function() {
                        return {
                          title: vm.product.title,
                          price: vm.product.price,
                          id: vm.product.id,
                          color: color,
                          img: img,
                          qty: qty
                        };
                    }
                }
            });

            modalInstance.result.then(function() {

            }, function() {
                console.log("Outside Modal");
            });


        };

    }


})();
