import ContactsHtml from './contacts.html';
import ContactsController from './contacts.controller';

const contacts = {
  bindings: {
    contacts: '<',
    filter: '<'
  },
  template: ContactsHtml,
  controller: ContactsController
};

export default contacts;