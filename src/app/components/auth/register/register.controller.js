class RegisterController {

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

  createUser(event) {
    return this.AuthService
               .register(event.user)
               .then(() => this.$state.go('app'),
                 reason => this.error = reason.message);
  };
}

export default RegisterController;