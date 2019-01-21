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

const app = angular
  .module('angularJSApp', ['ui.router', 'ngMaterial'])
  .component('home', HomeComponent)
  .component('about', AboutComponent);

app.controller('HomeController', function ($scope) {
  $scope.welcomeText = 'Welcome to angularJSApp Home!';
});

app.config(function ($stateProvider, $urlRouterProvider) {
  const states = [{
      name: 'home',
      url: '/',
      views: {
        '': {
          templateUrl: 'app/components/home/home.html'
        },
        'header@home': {
          templateUrl: 'app/shared/header/header.html'
        }
      }
    },
    {
      name: 'about',
      url: '/about',
      views: {
        '': {
          templateUrl: 'app/components/about/about.html'
        },
        'header@about': {
          templateUrl: 'app/shared/header/header.html'
        }
      }
    }
  ];

  states.forEach(state => $stateProvider.state(state));
  $urlRouterProvider.otherwise('/');
});