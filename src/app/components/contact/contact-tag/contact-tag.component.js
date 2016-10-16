import ContactTagController from './contact-tag.controller';
import ContactTagHtml from './contact-tag.html';

const contactTag = {
  bindings: {
    tag: '<',
    onChange: '&'
  },
  controller: ContactTagController,
  template: ContactTagHtml
};

export default contactTag;