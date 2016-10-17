import angular from 'angular';

import AppHtml from './app.html';
import AppController from './app.controller';

const app = {
  template: AppHtml,
  controller: AppController
};

angular
  .module('common')
  .config(($stateProvider) => {
    $stateProvider
      .state('app', {
        redirectTo: 'new',
        url: '/app',
        data: {
          requiredAuth: true
        },
        component: 'app'
      });
  });

export default app;