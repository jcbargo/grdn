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
        });
    }
})();
