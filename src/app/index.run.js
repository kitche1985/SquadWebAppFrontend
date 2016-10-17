(function() {
  'use strict';

  angular
    .module('squadGoalFontEnd')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
