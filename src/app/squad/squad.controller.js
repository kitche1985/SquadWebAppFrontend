(function() {
  'use strict';

  angular
    .module('squadGoalFrontEnd')
    .controller('SquadController', SquadController);

  /** @ngInject */
  function SquadController() {
      var vm = this;
      vm.test = 'this is for test';
  }
})();
