export default ($stateProvider) => {
  $stateProvider
    .state('app', {
      redirectTo: 'contacts',
      url: '/app',
      data: {
        requiredAuth: true
      },
      component: 'app'
    });
}