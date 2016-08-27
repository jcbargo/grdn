var grdn = grdn || {},
    grdn = grdn.utils || {};

grdn.mapInit = function() {

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

grdn.datePickerInit = function() {
        $('#date-end').bootstrapMaterialDatePicker
        ({
            weekStart: 0, format: 'DD/MM/YYYY HH:mm'
        });

        $('#date-start').bootstrapMaterialDatePicker
        ({
            weekStart: 0, format: 'DD/MM/YYYY HH:mm', shortTime : true
        }).on('change', function(e, date)
        {
            $('#date-end').bootstrapMaterialDatePicker('setMinDate', date);
        });
}



// ==================== GLOBAL/INIT =========================
/**
 * Function executed when document is ready. It calls all modules' init function.
 */
$( document ).ready(function() {
    google.maps.event.addDomListener(window, 'load', grdn.mapInit);

    grdn.datePickerInit();
});
