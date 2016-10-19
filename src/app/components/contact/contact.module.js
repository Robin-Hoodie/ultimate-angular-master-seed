import angular from 'angular';
import UIRouter from 'angular-ui-router';

import ContactRoute from './contact.route';
import ContactService from './contact.service';
import ContactDetailComponent from './contact-detail/contact-detail.component';
import ContactEditComponent from './contact-edit/contact-edit.component';
import ContactNewComponent from './contact-new/contact-new.component';
import ContactTagComponent from './contact-tag/contact-tag.component';


const contact = angular
  .module('components.contact', [
    UIRouter
  ])
  .config(ContactRoute)
  .component('contactDetail', ContactDetailComponent)
  .component('contactEdit', ContactEditComponent)
  .component('contactNew', ContactNewComponent)
  .component('contactTag', ContactTagComponent)
  .factory('ContactService', ContactService)
  .name;

export default contact;
