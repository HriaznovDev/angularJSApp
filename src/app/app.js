require('angular');
require('angular-ui-router');
require('angular-aria');
require('angular-animate');
require('angular-material');
require('./components/home/home.component.js');
require('./components/about/about.component.js');

const app = angular.module('angularJSApp', ['ui.router', 'ngMaterial', 'home', 'about']);

app.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      views: {
        "": {
          templateUrl: "app/components/home/home.html"
        },
        "header@home": {
          templateUrl: "app/shared/header/header.html"
        }
      }
    })
    .state('about', {
      url: '/about',
      views: {
        "": {
          templateUrl: "app/components/about/about.html"
        },
        "header@about": {
          templateUrl: "app/shared/header/header.html"
        }
      }
    });
});