(function() {

  'use strict'

  angular
    .module('grdn.route', [])
    .config(Route);

  Route.$inject = ['$routeProvider',  '$locationProvider']

  function Route($routeProvider, $locationProvider) {

    var viewsBasePath = 'templates/';

    $locationProvider.html5Mode(true);

    $routeProvider
    .when('/', {
      templateUrl: viewsBasePath + 'home.html'
    })
    // .when('<path>', {
    //   controller: '<ctrl-name>',
    //   controllerAs: '<ctrl-alias>',
    //   templateUrl: viewsBasePath + '<view-name>.html'
    // })
    .when('/error', {
      templateUrl: viewsBasePath + 'error.html'
    })
    .otherwise({
      redirectTo: '/error'
    });

  }

})();
