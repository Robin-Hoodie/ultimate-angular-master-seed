import AppNavHtml from './app-nav.html';

const appNav = {
  bindings: {
    user: '<',
    onLogout: '&'
  },
  template: AppNavHtml
};

export default appNav;