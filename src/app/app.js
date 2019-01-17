const angular = require('angular');
const uiRouter = require('angular-ui-router');
const AppComponent = require('./app.component');

angular.module('app', [
    uiRouter
  ])
  .config(($locationProvider, $stateProvider, $urlRouterProvider) => {
    'ngInject';

    // Define our app routing, we will keep our layout inside the app component
    // The layout route will be abstract and it will hold all of our app views
    $stateProvider
      .state('app', {
        url: '/app',
        abstract: true,
        template: '<app></app>'
      })

      // Dashboard page to contain our goats list page
      .state('app.home', {
        url: '/home',
        template: 'Home page'
      });

    // Default page for the router
    $urlRouterProvider.otherwise('/app/home');
  })
  .component('app', AppComponent);