"use strict"

angular.module("theaquaNg", ['ng'])
  .directive "selectize", ($timeout) ->
    restrict: "AE"
    link: (scope, element, attrs) ->
      $timeout ->
        $(element).selectize scope.$eval(attrs.selectize)