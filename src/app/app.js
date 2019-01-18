require('angular');
require('angular-ui-router');
require('angular-aria');
require('angular-animate');
require('angular-material');

const app = angular.module('angularJSApp', ['ui.router', 'ngMaterial']);

app.controller('HomeController', function ($scope) {
  $scope.welcomeText = 'Welcome to angularJSApp Home!';
});

app.config(function ($stateProvider, $urlRouterProvider) {
  const states = [{
      name: 'home',
      url: '/',
      templateUrl: 'app/components/home/home.html'
    },
    {
      name: 'about',
      url: '/about',
      templateUrl: 'app/components/about/about.html'
    }
  ];

  states.forEach((state) => $stateProvider.state(state));
  $urlRouterProvider.otherwise('/');
});