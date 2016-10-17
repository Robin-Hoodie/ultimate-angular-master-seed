export default ($stateProvider) => {
  $stateProvider
    .state('new', {
      parent: 'app',
      url: '/new',
      component: 'contactNew'
    })
    .state('contact', {
      parent: 'app',
      url: '/contact/:id',
      component: 'contactEdit',
      resolve: {
        contact: function($transition$, ContactService) {
          var key = $transition$.params().id;
          return ContactService.getContactById(key).$loaded();
        }
      }
    });
};