export default () => {
  return {
    restrict: 'A',
    require: 'ngModel',
    compile: ($element) => {
      $element.addClass('dynamic-input');
      return ($scope, $element, $attrs, $ctrl) => {
        const dynamicClass = 'dynamic-input--no-contents'
        $scope.$watch(() => $ctrl.$viewValue, newValue => {
          if (newValue) {
            $element.removeClass(dynamicClass);
          } else {
            $element.addClass(dynamicClass);
          }
        });
      };
    }
  }
};
