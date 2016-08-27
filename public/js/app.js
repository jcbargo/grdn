(function(){

  var app = angular.module('grdn', [
    'ngRoute',

    'grdn.route',
  ]);

  app.run(run);

  run.$inject = ['$log'];

  function run($log) {
    // Do something
  }

})();
