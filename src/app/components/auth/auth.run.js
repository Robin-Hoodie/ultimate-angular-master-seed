function run($transitions, $state, AuthService) {
  $transitions.onStart({
    to: (state) => {
      return !!(state.data && state.data.requiredAuth);
    }
  }, () => {
    return AuthService
      .requireAuthentication()
      .catch(() => {
        return $state.target('auth.login');
      });
  });

  $transitions.onStart({
    to: 'auth.*'
  }, () => {
    if (AuthService.isAuthenticated()) {
      return $state.target('app');
    }
  });
}

export default run;