(function() {

  'use strict'

  angular
    .module('grdn.route', [])
    .config(Route);

  Route.$inject = ['$routeProvider',  '$locationProvider']

  function Route($routeProvider, $locationProvider) {

    var viewsBasePath = 'templates/';

    // $locationProvider.html5Mode(true);

    $routeProvider
    .when('/', {
      templateUrl: viewsBasePath + 'index.html'
    })
    .when('/new-orchard/name', {
      templateUrl: viewsBasePath + 'orchard-name.html'
    })
    .when('/new-orchard/community', {
      templateUrl: viewsBasePath + 'orchard-community.html'
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
