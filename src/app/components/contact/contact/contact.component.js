import ContactHtml from './contact.html';
import ContactController from './contact.controller';

const contact = {
  bindings: {
    contact: '<',
    onSelect: '&'
  },
  template: ContactHtml,
  controller: ContactController
};

export default contact;