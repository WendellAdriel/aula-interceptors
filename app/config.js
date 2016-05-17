(function() {
  'use strict';

  angular.module('app')
    .config(config);

  config.$inject = ['$httpProvider'];

  function config($httpProvider) {
    $httpProvider.interceptors.push('notFoundInterceptor');
    $httpProvider.interceptors.push('authInterceptor');
  }
})();