import angular from 'angular';

import ContactEditHtml from './contact-edit.html';
import ContactEditController from './contact-edit.controller';

const contactEdit = {
  bindings: {
    contact: '<'
  },
  template: ContactEditHtml,
  controller: ContactEditController
};

angular.module('components.contact')
  .config(($stateProvider) => {
    $stateProvider
      .state('contact', {
        parent: 'app',
        url: '/contact/:id',
        component: 'contactEdit',
        resolve: {
          contact: function($transition$, ContactService) {
            var key = $transition$.params().id;
            return ContactService.getContactById(key).$loaded();
          }
        }
      });
  });

export default contactEdit;