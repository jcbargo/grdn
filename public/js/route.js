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
      templateUrl: viewsBasePath + 'home.html'
    })
    .when('/sign-in', {
      templateUrl: viewsBasePath + 'sign-in.html'
    })
    .when('/new-orchard/navigator', {
      templateUrl: viewsBasePath + 'orchard/navigator.html'
    })
    .when('/new-orchard/name', {
      templateUrl: viewsBasePath + 'orchard/name.html'
    })
    .when('/new-orchard/community', {
      controller: 'OrchardsCommunityCtrl',
      controllerAs: 'orchardsCommunityCtrl',
      templateUrl: viewsBasePath + 'orchard/community.html'
    })
    .when('/new-orchard/place', {
      controller: 'OrchardsPlaceCtrl',
      controllerAs: 'orchardsPlaceCtrl',
      templateUrl: viewsBasePath + 'orchard/place.html'
    })
    .when('/new-orchard/dates', {
      controller: 'OrchardsDatesCtrl',
      controllerAs: 'orchardsDatesCtrl',
      templateUrl: viewsBasePath + 'orchard/dates.html'
    })
    .when('/new-orchard/products', {
      templateUrl: viewsBasePath + 'orchard/products.html'
    })
    .when('/orchard-list', {
      templateUrl: viewsBasePath + 'orchard-list.html'
    })
    .when('/orchard/selected/1', {
      templateUrl: viewsBasePath + 'orchard/selected-orchard-1.html'
    })
    .when('/orchard/selected/2', {
      templateUrl: viewsBasePath + 'orchard/selected-orchard-2.html'
    })
    .when('/tasks', {
      controller: 'TasksCtrl',
      controllerAs: 'tasksCtrl',
      templateUrl: viewsBasePath + 'tasks.html'
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
