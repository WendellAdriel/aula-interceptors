(function() {
  'use strict';

  angular.module('app')
    .controller('ErroController', erroController);

  function erroController() {
    var vm = this;
    vm.erro404 = {
      codigo : 404,
      mensagem : 'Algo deu errado! :('
    };
    vm.naoAutorizado = {
      mensagem : 'Você não tem permissão para acessar esse recurso!'
    };
  }
})();