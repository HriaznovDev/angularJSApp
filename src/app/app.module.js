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
import {
  PageWrapperComponent
} from './components/page-wrapper/page-wrapper.component';

const app = angular
  .module('angularJSApp', ['ui.router', 'ngMaterial'])
  .component('pageWrapper', PageWrapperComponent)
  .component('header', HeaderComponent)
  .component('home', HomeComponent)
  .component('about', AboutComponent);

app.config(function ($stateProvider, $urlRouterProvider) {
  const states = [{
      name: 'home',
      url: '/',
      views: {
        '': 'home',
        'header@home': 'header',
        'page-wrapper@home': 'pageWrapper'
      }
    },
    {
      name: 'about',
      url: '/about',
      views: {
        '': 'about',
        'header@about': 'header',
        'page-wrapper@about': 'pageWrapper'
      }
    }
  ];

  states.forEach(state => $stateProvider.state(state));
  $urlRouterProvider.otherwise('/');
});