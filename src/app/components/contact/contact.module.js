import angular from 'angular';
import UIRouter from 'angular-ui-router';

import ContactRoute from './contact.route';
import ContactService from './contact.service';
import ContactDetailComponent from './contact-detail/contact-detail.component';
import ContactEditComponent from './contact-edit/contact-edit.component';
import ContactNewComponent from './contact-new/contact-new.component';
import ContactsComponent from './contacts/contacts.component';
import ContactComponent from './contact/contact.component';
import ContactTagComponent from './contact-tag/contact-tag.component';
import ContactsFilter from './contacts/contacts.filter';
import LengthCheck from './length-check/length-check.directive';


const contact = angular
  .module('components.contact', [
    UIRouter
  ])
  .config(ContactRoute)
  .component('contactDetail', ContactDetailComponent)
  .component('contactEdit', ContactEditComponent)
  .component('contactNew', ContactNewComponent)
  .component('contacts', ContactsComponent)
  .component('contactTag', ContactTagComponent)
  .component('contact', ContactComponent)
  .filter('contactsFilter', ContactsFilter)
  .factory('ContactService', ContactService)
  .directive('lengthCheck', LengthCheck)
  .name;

export default contact;
