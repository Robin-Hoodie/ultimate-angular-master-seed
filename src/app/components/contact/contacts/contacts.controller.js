class ContactsController {
  constructor($filter, $state) {
    this.$filter = $filter;
    this.$state = $state;
  }

  $onInit() {
    this.filteredContacts = this.$filter('contactsFilter')(this.contacts, this.filter);
  }

  goToContact(event) {
    this.$state.go('contact', {
      id: event.contactId
    });
  }
}

export default ContactsController;