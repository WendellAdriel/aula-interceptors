(function() {
  'use strict';

  angular.module('app')
    .controller('HomeController', homeController);

  homeController.$inject = ['$http'];

  function homeController($http) {
    var vm = this;
    vm.name = 'Webschool';
    vm.buscarArquivo = buscarArquivo;
    vm.testaToken = testaToken;
    vm.testaErroAutorizacao = testaErroAutorizacao;

    function buscarArquivo() {
      $http.get('https://github.com/WendellAdrielasdfasd');
    }

    function testaToken() {
      localStorage.setItem('token', 'TOKEN_TESTE');
      $http.get('app/app.js');
    }

    function testaErroAutorizacao() {
      localStorage.removeItem('token');
      $http.get('https://api.fullcontact.com/v2/person.json?email=bart@fullcontact.com');
    }
  }
})();
