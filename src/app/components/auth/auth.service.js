class AuthService {

  constructor($firebaseAuth) {
    this.$firebaseAuth = $firebaseAuth;
    this.auth = $firebaseAuth();
    this.authData = null;
  }

  _storeAuthData(response) {
    this.authData = response;
    return this.authData;
  }

  _onSignIn(user) {
    this.authData = user;
    return this.auth.$requireSignIn();
  }

  _clearAuthData() {
    this.authData = null;
  }

  login (user) {
    return this.auth
      .$signInWithEmailAndPassword(user.email, user.password)
      .then(response => this._storeAuthData(response));
  };

  register (user) {
    return this.auth
      .$createUserWithEmailAndPassword(user.email, user.password)
      .then(response => this._storeAuthData(response));
  };

  requireAuthentication() {
    return this.auth
      .$waitForSignIn()
      .then(response => this._onSignIn(response));
  };

  isAuthenticated() {
    return !!this.authData;
  };

  getUser () {
    if (this.authData) {
      return this.authData;
    }
  };

  logout () {
    return this.auth
      .$signOut()
      .then(() => this._clearAuthData);
  }
}

export default AuthService;