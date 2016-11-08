/* @ngInject */
export default ($firebaseRefProvider) => {
  const config = {
    apiKey: "AIzaSyARTAzLNSX3-Q3A2Bc_xrbA8GfkYUIwGh0",
    authDomain: "contacts-da438.firebaseapp.com",
    databaseURL: "https://contacts-da438.firebaseio.com",
    storageBucket: "contacts-da438.appspot.com",
    messagingSenderId: "724031356081"
  };
  $firebaseRefProvider
    .registerUrl({
      default: config.databaseURL,
      contacts: config.databaseURL + '/contacts'
    });
  firebase.initializeApp(config);
}