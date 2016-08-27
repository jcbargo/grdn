(function() {

    'use strict';

    angular
        .module('grdn')
        .controller('OrchardsDatesCtrl', OrchardsDatesCtrl);

    OrchardsDatesCtrl.$inject = ['$scope', '$log'];

    function OrchardsDatesCtrl($scope, $log) {

        var self = this;

        /*
         * Methods definition
         */

        $scope.$on('$viewContentLoaded', function() {
            $('#date-start').bootstrapMaterialDatePicker
            ({
                weekStart: 0, format: 'DD/MM/YYYY'
            });
        });
    }

})();
