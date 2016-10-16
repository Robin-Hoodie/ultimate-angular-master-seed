function AuthFormController() {
  var ctrl = this;

  ctrl.$onChanges = function(changes) {
    if (changes.user) {
      ctrl.user = angular.copy(changes.user);
    }
  };

  ctrl.submitForm = function() {
    ctrl.onSubmit({
      $event: {
        user: ctrl.user
      }
    });
  };
}

angular
  .module('components.auth')
  .controller('AuthFormController', AuthFormController);