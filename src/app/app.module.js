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

const app = angular
  .module('angularJSApp', ['ui.router', 'ngMaterial']);

app
  .controller('HomeController', HomeController)
  .controller('AboutController', AboutController);

app.config(function ($stateProvider, $urlRouterProvider) {
  const states = [{
      name: 'home',
      url: '/',
      views: {
        '': HomeComponent,
        'header@home': {
          templateUrl: 'app/shared/header/header.html'
        }
      }
    },
    {
      name: 'about',
      url: '/about',
      views: {
        '': AboutComponent,
        'header@about': {
          templateUrl: 'app/shared/header/header.html'
        }
      }
    }
  ];

  states.forEach(state => $stateProvider.state(state));
  $urlRouterProvider.otherwise('/');
});