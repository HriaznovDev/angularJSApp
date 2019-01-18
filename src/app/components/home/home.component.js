angular.module('angularJSApp')
  .component('home', {
    templateUrl: './home.html',
    controller: function HomeController() {
      this.welcomeText = 'Welcome to angularJSApp Home!';
    }
  });