import 'angular';
import 'angular-ui-router';
import 'angular-aria';
import 'angular-animate';
import 'angular-material';
import {
  AboutComponent
} from './components/about/about.component';
import {
  HomeComponent
} from './components/home/home.component';
import {
  HeaderComponent
} from './shared/header/header.component';

const app = angular
  .module('angularJSApp', ['ui.router', 'ngMaterial'])
  .component('header', HeaderComponent)
  .component('home', HomeComponent)
  .component('about', AboutComponent);

app.config(function ($stateProvider, $urlRouterProvider) {
  const states = [{
      name: 'home',
      url: '/',
      component: 'home'
    },
    {
      name: 'about',
      url: '/about',
      component: 'about'
    }
  ];

  states.forEach(state => $stateProvider.state(state));
  $urlRouterProvider.otherwise('/');
});