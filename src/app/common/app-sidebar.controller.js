import Logo from '../../img/logo.png';

class AppSidebarController {


  $onInit () {
    this.logo = Logo;
    this.contactTags = [{
      label: 'All Contacts',
      icon: 'star'
    }, {
      label: 'Friends',
      icon: 'people'
    }, {
      label: 'Family',
      icon: 'child_care'
    }, {
      label: 'Acquaintances',
      icon: 'accessibility'
    }, {
      label: 'Following',
      icon: 'remove_red_eye'
    }];
  }
}

export default AppSidebarController;