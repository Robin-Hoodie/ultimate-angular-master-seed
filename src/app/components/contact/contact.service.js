class ContactService {

  /* @ngInject */
  constructor(AuthService, $firebaseRef, $firebaseArray, $firebaseObject) {
    this.$firebaseArray = $firebaseArray;
    this.$firebaseObject = $firebaseObject;
    this.ref = $firebaseRef.contacts;
    this.uid = AuthService.getUser().uid;
  }

  createNewContact(contact) {
    return this.$firebaseArray(ref.child(this.uid)).$add(contact);
  }

  getContactById(id) {
    return this.$firebaseObject(ref.child(this.uid).child(id));
  }

  updateContact(contact) {
    return contact.$save();
  }

  deleteContact(contact) {
    return contact.$remove();
  }

  getContactList() {
    return this.$firebaseArray(ref.child(this.uid));
  }

}

export default ContactService;