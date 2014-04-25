(function() {
  "use strict";

  angular.module("theaquaNg", ['ng']).directive("selectize", function($timeout) {
    return {
      restrict: "AE",
      link: function(scope, element, attrs) {
        return $timeout(function() {
          return $(element).selectize(scope.$eval(attrs.selectize));
        });
      }
    };
  });
}).call(this);