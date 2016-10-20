(function() {
  'use strict';

  angular
    .module('squadGoalFontEnd')
    .controller('SquadController', SquadController);

  /** @ngInject */
  function SquadController() {
      var vm = this;
      vm.test = 'this is for test';
  }
})();
