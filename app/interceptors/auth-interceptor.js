(function() {
  'use strict';

  angular.module('app')
    .factory('authInterceptor', authInterceptor);

  authInterceptor.$inject = ['$q', '$location'];

  function authInterceptor($q, $location) {
    return {
      request : function(config) {
        config.headers = config.headers || {};
        console.log(config.headers);
        console.log(localStorage.getItem('token'));
        if (localStorage.getItem('token')) {
          config.headers.Authorization = 'Bearer ' + localStorage.getItem('token');
        }
        console.log(config.headers);
        return config;
      },
      responseError : function(rejection) {
        if (rejection.status === 401 || rejection.status === 403) {
          $location.path('/erro/nao-autorizado');
        }
        return $q.reject(rejection);
      }
    };
  }
})();