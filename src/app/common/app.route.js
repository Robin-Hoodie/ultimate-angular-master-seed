export default ($stateProvider) => {
  $stateProvider
    .state('app', {
      redirectTo: 'new',
      url: '/app',
      data: {
        requiredAuth: true
      },
      component: 'app'
    });
}