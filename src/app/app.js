require('angular');
require('angular-aria');
require('angular-animate');
require('angular-material');
require('./home/home.component.js');

const app = angular
  .module('myApp', ['ngComponentRouter', 'ngMaterial', 'home'])
  .config(function ($locationProvider) {
    $locationProvider.html5Mode(true);
  })
  .value('$routerRootComponent', 'app')
  .component('app', {
    template: `
      <a ng-link="['Home']">Home</a>
      <ng-outlet></ng-outlet>
    `,
    $routeConfig: [
      { path: '/home', name: 'Home', component: 'home', useAsDefault: true }
    ]
  });

app.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('home', {
      url: "/",
      views: {
        "": {
          templateUrl: "app/home/home.html"
        },
        "header@home": {
          templateUrl: "shared/header/header.html"
        }
      }
    });
});