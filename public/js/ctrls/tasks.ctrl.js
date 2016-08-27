(function() {

    'use strict';

    angular
        .module('grdn')
        .controller('TasksCtrl', TasksCtrl);

    TasksCtrl.$inject = ['$scope', '$log'];

    function TasksCtrl($scope, $log) {

        var self = this;

        /*
         * Methods definition
         */

        $scope.$on('$viewContentLoaded', function(){
          $log.debug('Hello');
          //Here your view content is fully loaded !!
        });
    }

})();
