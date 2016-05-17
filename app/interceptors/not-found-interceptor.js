(function() {
  'use strict';

  angular.module('app')
    .factory('notFoundInterceptor', notFoundInterceptor);

  notFoundInterceptor.$inject = ['$q', '$location'];

  function notFoundInterceptor($q, $location) {
    return {
      responseError : function(rejection) {
        if (rejection.status === 404) {
          $location.path('/erro/404');
        }
        return $q.reject(rejection);
      }
    };
  }
})();