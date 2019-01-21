import 'angular';
import 'angular-ui-router';
import 'angular-aria';
import 'angular-animate';
import 'angular-material';
import {
  AboutComponent,
  AboutController
} from './components/about/about.component';
import {
  HomeComponent,
  HomeController
} from './components/home/home.component';
import {
  HeaderComponent
} from './shared/header/header.component';

const app = angular
  .module('angularJSApp', ['ui.router', 'ngMaterial'])
  .component('header', HeaderComponent)
  .component('home', HomeComponent)
  .component('about', AboutComponent);

app
  .controller('HomeController', HomeController)
  .controller('AboutController', AboutController);

app.config(function ($stateProvider, $urlRouterProvider) {
  const states = [{
      name: 'home',
      url: '/',
      views: {
        '': 'home',
        'header@home': 'header'
      }
    },
    {
      name: 'about',
      url: '/about',
      views: {
        '': 'about',
        'header@about': 'header'
      }
    }
  ];

  states.forEach(state => $stateProvider.state(state));
  $urlRouterProvider.otherwise('/');
});