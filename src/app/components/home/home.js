class UserService {
  get getUserData() {
    return {
      name: 'Denis'
    };
  }
}

class homeCtrl {
  constructor(userService) {
    this.user = userService.getUserData;
    this.firstTitle = 'Welcome to our Home page';
  }
}

angular.module('myApp.home', [])
  .service('userService', UserService)
  .controller('homeCtrl', homeCtrl);