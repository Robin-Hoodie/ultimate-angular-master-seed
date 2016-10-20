import angular from 'angular';
import Contact from './contact/contact.module';
import Auth from './auth/auth.module';

const components = angular
  .module('components', [
    Contact,
    Auth
  ])
  .name;

export default components;