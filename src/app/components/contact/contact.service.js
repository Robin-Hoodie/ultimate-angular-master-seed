function ContactService(AuthService, $firebaseRef, $firebaseArray, $firebaseObject) {
  const ref = $firebaseRef.contacts;
  const uid = AuthService.getUser().uid;

  return {
    createNewContact: contact => $firebaseArray(ref.child(uid)).$add(contact),
    getContactById: id => $firebaseObject(ref.child(uid).child(id)),
    updateContact: contact => contact.$save(),
    deleteContact: contact => contact.$remove(),
    getContactList: () => $firebaseArray(ref.child(uid))
  };

}

export default ContactService;