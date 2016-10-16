import angular from 'angular';

import LoginHtml from './login.html';
import LoginController from './login.controller';

const login = {
  template: LoginHtml,
  controller: LoginController
};

angular
  .module('components.auth')
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('auth', {
        redirectTo: 'auth.login',
        url: '/auth',
        template: '<ui-view></ui-view>'
      })
      .state('auth.login', {
        url: '/login',
        component: 'login'
      });
    $urlRouterProvider.otherwise('/auth/login');
  });

export default login;