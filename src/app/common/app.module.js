import angular from 'angular';
import UIRouter from 'angular-ui-router';
import AngularLoadingBar from 'angular-loading-bar';

import AppRoute from './app.route';
import AppRun from './app.run';
import AppComponent from './app.component';
import AppNavComponent from './app-nav.component';
import AppSidebarComponent from './app-sidebar.component';

const common = angular
  .module('common', [
    UIRouter,
    AngularLoadingBar
  ])
  .config(AppRoute)
  .run(AppRun)
  .component('app', AppComponent)
  .component('appNav', AppNavComponent)
  .component('appSidebar', AppSidebarComponent)
  .name;

export default common;