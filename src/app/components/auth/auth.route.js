export default ($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise('/auth/login');

  $stateProvider
    .state('auth', {
      redirectTo: 'auth.login',
      url: '/auth',
      template: '<ui-view></ui-view>'
    })
    .state('login', {
      parent: 'auth',
      url: '/login',
      component: 'login'
    })
    .state('register', {
      parent: 'auth',
      url: '/register',
      component: 'register'
    });
};