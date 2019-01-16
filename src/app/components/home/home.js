angular.module('myApp.home', [])
  .controller('homeCtrl', [
    function () {
      this.welcomeText = 'Welcome to our Home page!';
    }
  ]);