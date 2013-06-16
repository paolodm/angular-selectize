angular.module('demo', []);

console.log('inside file');

angular.module('demo').directive('selectize', function() {
    console.log('inside dir');

    return {
        // Restrict it to be an attribute in this case
        restrict: 'A',
        // responsible for registering DOM listeners as well as updating the DOM
        link: function(scope, element, attrs) {
            console.log('inside link');
            $(element).selectize(scope.$eval(attrs.selectize));
        }
    };
});