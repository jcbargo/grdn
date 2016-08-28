(function() {

    'use strict';

    angular
        .module('grdn')
        .controller('OrchardsPlaceCtrl', OrchardsPlaceCtrl);

    OrchardsPlaceCtrl.$inject = ['$scope', '$log'];

    function OrchardsPlaceCtrl($scope, $log) {

        var self = this;

        /*
         * Methods definition
         */

        $scope.$on('$viewContentLoaded', function() {
            google.maps.event.addDomListener(window, 'load', mapInit);


            $('#date-start').bootstrapMaterialDatePicker
            ({
                weekStart: 0, format: 'DD/MM/YYYY'
            });
        });

        function mapInit() {
            var var_location = new google.maps.LatLng(9.9012696,-83.9959812);

            var var_mapoptions = {
                center: var_location,

                zoom: 16
            };

            var var_marker = new google.maps.Marker({
                position: var_location,
                map: var_map,
                title: "Terra Campus Corporativo"
            });

            var var_map = new google.maps.Map(document.getElementById("map-container"),
                var_mapoptions);

            var_marker.setMap(var_map);

        }
    }
})();
