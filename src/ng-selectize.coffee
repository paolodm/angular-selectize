"use strict"

angular.module("theaquaNg")
  .directive "selectize", ($timeout) ->
    restrict: "AE"
    link: (scope, element, attrs) ->
      $timeout ->
        element.selectize scope.$eval(attrs.selectize)