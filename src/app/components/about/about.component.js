angular.module('angularJSApp')
  .component('about', {
    templateUrl: './about.html',
    bindings: {
      aboutText: 'This is the about component!'
    }
  });