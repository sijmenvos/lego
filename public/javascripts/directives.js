angular.module("lego")

.directive('draggable', function() {
    return {
        // A = attribute, E = Element, C = Class and M = HTML Comment
        restrict:'A',
        link: function(scope, element, attrs) {
        	console.log(attrs);
        	element.draggable(JSON.parse(attrs.draggable));
        }
	}
})

.directive('multiline', ['$timeout', function($timeout) {
    return {
        restrict: 'A',
        compile: function(wrappedElement) {
            var element = wrappedElement[0],
                input = element.querySelector('input');

                element.innerHTML += '<textarea ng-model="value" class="ng-touched"></textarea>';

            $timeout(function() {
                element.querySelector('input').style.display = 'none';

                element.querySelector('textarea').addEventListener('blur', function() {
                    element.classList.remove('md-input-focused');
                });

                element.querySelector('textarea').addEventListener('focus', function() {
                    element.classList.add('md-input-focused');
                });
            }, 0)
        }
    }
}]);