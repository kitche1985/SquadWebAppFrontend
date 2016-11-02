(function() {
  'use strict';

  /**
   * @ngdoc directive
   * @name squadGoalFrontEnd.directive:acmeNavbar
   * @element div
   * @function
   *
   * @description
   * Default navigation bar
   *
   * @example
     <acme-navbar creation-date="created_on"></acme-navbar>
   */
  angular
    .module('squadGoalFrontEnd')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController(moment) {
      var vm = this;

      // "vm.creationDate" is available by directive option "bindToController: true"
      vm.relativeDate = moment(vm.creationDate).fromNow();
    }
  }

})();
