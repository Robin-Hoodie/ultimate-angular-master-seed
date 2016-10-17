import angular from 'angular';
import Common from './common/app.module';
import Components from './components/components.module';
import RootComponent from './root.component';

console.log('Common', Common);
const root = angular
  .module('root', [
    Common,
    Components
  ])
  .component('root', RootComponent)
  .name;

export default root;
