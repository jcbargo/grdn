(function() {

    'use strict';

    angular
        .module('grdn')
        .controller('OrchardsCtrl', OrchardsCtrl);

    OrchardsCtrl.$inject = ['$scope', '$log'];

    function OrchardsCtrl($scope, $log) {

        var self = this;

        /*
         * Methods definition
         */

        $scope.$on('$viewContentLoaded', function() {
            $('#date-start').bootstrapMaterialDatePicker
            ({
                weekStart: 0, format: 'DD/MM/YYYY', shortTime : true
            });
        });
    }

})();
