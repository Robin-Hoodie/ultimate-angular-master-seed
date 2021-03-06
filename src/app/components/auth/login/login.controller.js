class LoginController {

  /* @ngInject */
  constructor(AuthService, $state) {
    this.AuthService = AuthService;
    this.$state = $state;
  }

  $onInit() {
    this.error = null;
    this.user = {
      email: '',
      password: ''
    };
  };

  loginUser(event) {
    return this.AuthService
               .login(event.user)
               .then(
                 () => this.$state.go('app'),
                 reason => this.error = reason.message
               );
  };
}

export default LoginController;