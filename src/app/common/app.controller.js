class AppController {

  constructor(AuthService, $state) {
    this.AuthService = AuthService;
    this.$state = $state;
  }

  $onInit() {
    this.user = this.AuthService.getUser();
  }

  logout() {
    this.AuthService.logout()
        .then(() => this.$state.go('auth.login'));
  }
}

export default AppController;