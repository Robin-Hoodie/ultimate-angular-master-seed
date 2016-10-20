import ContactDetailHtml from './contact-detail.html';
import ContactDetailController from './contact-detail.controller';

const contactDetail = {
  bindings: {
    contact: '<',
    onSave: '&',
    onUpdate: '&',
    onDelete: '&'
  },
  template: ContactDetailHtml,
  controller: ContactDetailController
};

export default contactDetail;