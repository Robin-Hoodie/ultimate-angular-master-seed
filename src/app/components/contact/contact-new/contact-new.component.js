import angular from 'angular';

import ContactNewHtml from './contact-new.html';
import ContactNewController from './contact-new.controller';

const contactNew = {
  template: ContactNewHtml,
  controller: ContactNewController
};

angular.module('components.contact')
  .config(($stateProvider) => {
    $stateProvider
      .state('new', {
        parent: 'app',
        url: '/new',
        component: 'contactNew'
      });
  });

export default contactNew;