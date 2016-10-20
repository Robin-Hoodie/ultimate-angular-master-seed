import ContactEditHtml from './contact-edit.html';
import ContactEditController from './contact-edit.controller';

const contactEdit = {
  bindings: {
    contact: '<'
  },
  template: ContactEditHtml,
  controller: ContactEditController
};

export default contactEdit;