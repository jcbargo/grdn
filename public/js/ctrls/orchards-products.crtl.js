(function() {

    'use strict';

    angular
        .module('grdn')
        .controller('OrchardsProductsCtrl', OrchardsProductsCtrl);

    OrchardsProductsCtrl.$inject = ['$scope', '$log'];

    function OrchardsProductsCtrl($scope, $log) {

        var self = this;

        /*
         * Methods definition
         */

        $scope.$on('$viewContentLoaded', function() {
            $('.js-product').on("click", function(event) {
                event.preventDefault();
                var removeIcon = '<i class="js-chip-close close fa fa-times"></i>';

                $('.js-products-list').append($(this));
            });

            $('.js-product-lookup').on("keydown", function(event) {
                if (event.which == 13) {
                    var productName = $('.js-product-lookup').val().toLowerCase(),
                        markup =
                            '<div class="card">' +
                               '<div class="card-block">' +
                                   '<div class="media">' +
                                       '<div class="media-left">' +
                                           '<div class="color-tag orange"></div>' +
                                       '</div>' +
                                       '<div class="media-body">' +
                                           '<p class="orchard-name">' + productName + '</p>' +
                                           '<div class="card-text">' +
                                                '<ul>' +
                                                    '<li>Ayuda a bajar de peso</li>' +
                                               '</ul>' +
                                           '</div>' +
                                       '</div>' +
                                   '</div>' +
                               '</div>';

                    $('.js-products-list').append(markup);
                    $('.js-product-lookup').val('');
                }
            });
        });
    }
})();
