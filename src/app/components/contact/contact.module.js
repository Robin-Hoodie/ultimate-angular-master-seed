import angular from 'angular';
import UIRouter from 'angular-ui-router';

import ContactDetailComponent from './contact-detail/contact-detail.component';
import ContactEditComponent from './contact-edit/contact-edit.component';
import ContactNewComponent from './contact-new/contact-new.component';
import ContactTagComponent from './contact-tag/contact-tag.component';
import ContactService from './contact.service';
import ContactConfig from './contact.config';

const contact = angular
  .module('components.contact', [
    UIRouter
  ])
  .config(ContactConfig)
  .component('contactDetail', ContactDetailComponent)
  .component('contactEdit', ContactEditComponent)
  .component('contactNew', ContactNewComponent)
  .component('contactTag', ContactTagComponent)
  .factory('contactService', ContactService)
  .name;

export default contact;
