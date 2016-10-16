import UIRouter from 'angular-ui-router';
import AngularLoadingBar from 'angular-loading-bar';

import AppComponent from './app.component';
import AppNavComponent from './app-nav.component';
import AppSidebarComponent from './app-sidebar.component';

const common = angular
  .module('common', [
    UIRouter,
    AngularLoadingBar
  ])
  .run(function($transitions, cfpLoadingBar) {
    $transitions.onStart({}, cfpLoadingBar.start);
    $transitions.onSuccess({}, cfpLoadingBar.complete);
  })
  .component('app', AppComponent)
  .component('appNav', AppNavComponent)
  .component('appSidebar', AppSidebarComponent)
  .name;

export default common;