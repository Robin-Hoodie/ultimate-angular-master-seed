import angular from 'angular';

import RegisterHtml from './register.html';
import RegisterController from './register.controller';

const register = {
  template: RegisterHtml,
  controller: RegisterController
};

angular
  .module('components.auth')
  .config(($stateProvider) => {
    $stateProvider
      .state('auth.register', {
        url: '/register',
        component: 'register'
      });
  });

export default register;