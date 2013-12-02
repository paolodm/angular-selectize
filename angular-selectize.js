(function() {
    angular.module('angular-selectize', []);

    angular.module('angular-selectize').directive('selectize', function() {
        'use strict';
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                var selectize;
                scope.$watch(attrs.selectize, function(config) {
                    init(config);
                });
    
                if (attrs.ngModel) {
                    scope.$watch(attrs.ngModel, function() {
                        var val = element.val();
                        if (selectize && val !== selectize.getValue()) {
                            if (!val.length) {
                                selectize.clear();
                            } else {
                                init(scope.$eval(attrs.selectize));
                            }
                        }
                    });
                }
    
                scope.$on('$destroy', function() {
                    cleanup();
                });
    
                function init (config) {
                    cleanup();
                    element.selectize(config);
                    selectize = element[0].selectize;
                }
    
                function cleanup() {
                    if (selectize) {
                        if (angular.isFunction(selectize.destroy)) {
                            selectize.destroy();
                        }
                        selectize = null;
                    }
                }
            }
        };
    });

}).call(this);

