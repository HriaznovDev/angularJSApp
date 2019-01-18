angular.module('angularJSApp')
  .component('home', {
    templateUrl: './home.html',
    bindings: {
      welcomeText: 'Welcome to angularJSApp Home!'
    }
  });