(function() {
  'use strict';

  angular.module('app')
    .config(routesConfig);

  routesConfig.$inject = ['$stateProvider', '$locationProvider'];

  function routesConfig($stateProvider, $locationProvider) {
    $stateProvider
      .state('home', {
        url : '/',
        templateUrl  : 'app/home/home.html',
        controller   : 'HomeController',
        controllerAs : 'vm'
      })
      .state('notFound', {
        url : '/erro/404',
        templateUrl  : 'app/erro/404.html',
        controller   : 'ErroController',
        controllerAs : 'vm'
      })
      .state('naoAutorizado', {
        url          : '/erro/nao-autorizado',
        templateUrl  : 'app/erro/nao-autorizado.html',
        controller   : 'ErroController',
        controllerAs : 'vm'
      });

    $locationProvider.html5Mode(true);
  }
})();
