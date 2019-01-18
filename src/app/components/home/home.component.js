angular.module('angularJSApp')
  .component('home', {
    templateUrl: './home.html',
    controller: function() {
      this.welcomeText = 'Welcome to angularJSApp Home!';
    }
  });