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
          const key = $transition$.params().id;
          return ContactService.getContactById(key).$loaded();
        }
      }
    })
    .state('contacts', {
      parent: 'app',
      url: '/contacts?filter',
      component: 'contacts',
      params: {
        filter: {
          value: 'none'
        }
      },
      resolve: {
        contacts: (ContactService) => ContactService.getContactList().$loaded(),
        filter: ($transition$) => $transition$.params()
      }
    });
};