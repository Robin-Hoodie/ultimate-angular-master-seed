class ContactNewController {
  /* @ngInject */
  constructor($state, ContactService) {
    this.$state = $state;
    this.ContactService = ContactService;
  }

  $onInit() {
    this.contact = {
      name: '',
      email: '',
      job: '',
      location: '',
      social: {
        facebook: '',
        github: '',
        twitter: '',
        linkedin: ''
      },
      tag: 'none'
    };
  };

  createNewContact(event) {
    return this.ContactService
               .createNewContact(event.contact)
               .then(contact => this.$state.go('contact', {id: contact.key}));
  };
}

export default ContactNewController;