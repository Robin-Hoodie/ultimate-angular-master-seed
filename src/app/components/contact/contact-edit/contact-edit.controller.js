class ContactEditController {

  constructor($window, $state, ContactService, cfpLoadingBar) {
    this.$window = $window;
    this.$state = $state;
    this.ContactService = ContactService;
    this.cfpLoadingBar = cfpLoadingBar;
  }

  updateContact(event) {
    this.cfpLoadingBar.start();

    return this.ContactService
               .updateContact(event.contact)
               .finally(() => this.cfpLoadingBar.complete());
  };

  deleteContact(event) {
    const message = 'Delete ' + event.contact.name + ' from contacts?';

    if (this.$window.confirm(message)) {
      return this.ContactService
                 .deleteContact(event.contact)
                 .then(() => this.$state.go('contacts'));
    }
  };
}

export default ContactEditController;