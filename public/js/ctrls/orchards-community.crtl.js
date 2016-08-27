(function() {

    'use strict';

    angular
        .module('grdn')
        .controller('OrchardsCommunityCtrl', OrchardsCommunityCtrl);

    OrchardsCommunityCtrl.$inject = ['$scope', '$log'];

    function OrchardsCommunityCtrl($scope, $log) {

        var self = this;

        /*
         * Methods definition
         */

        $scope.$on('$viewContentLoaded', function() {
            $('.js-username-lookup').on("keydown", function(event) {
                if (event.which == 13) {
                    var username = $('.js-username-lookup').val(),
                        imagePath = username.toLowerCase() == 'ricardo' ?
                            'https://scontent.fsjo1-1.fna.fbcdn.net/v/t1.0-9/11755080_10153517885595127_4731574742267897440_n.jpg?oh=eabd0ce80c818e1b918713cad2c87be8&oe=583B8848' :
                            'http://content.screencast.com/users/jcbargo/folders/Jing/media/273b5f08-5662-40d8-aa3b-6dd72c3b3b4e/00000011.png',
                        markup =
                            '<div class="chip">' +
                                '<img src="' +
                                imagePath +
                                '" alt="username">' +
                                $('.js-username-lookup').val() +
                                '<i class="js-chip-close close fa fa-times"></i>' +
                            '</div>';

                    $('.js-community-list').append(markup);
                    $('.js-username-lookup').val('');
                }
            });

            $('.js-chip-close').on("click", function(event) {
                $(this).parent().remove();
            });
        });
    }
})();
