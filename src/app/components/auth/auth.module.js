import angular from 'angular';
import UIRouter from 'angular-ui-router';
import AngularFire from 'angularfire';

import AuthRoute from './auth.route';
import AuthConfig from './auth.config';
import AuthRun from './auth.run';
import AuthService from './auth.service';
import AuthFormComponent from './auth-form/auth-form.component';
import LoginComponent from './login/login.component';
import RegisterComponent from './register/register.component';

const auth = angular
  .module('components.auth', [
    UIRouter,
    AngularFire
  ])
  .config(AuthConfig)
  .config(AuthRoute)
  .run(AuthRun)
  .component('authForm', AuthFormComponent)
  .component('login', LoginComponent)
  .component('register', RegisterComponent)
  .service('AuthService', AuthService)
  .name;

export default auth;
