class UserService {
  getFullName() {
    return {
      fullName: 'Denis'
    };
  }
}

class homeCtrl {
  constructor(userService) {
    userService.getFullName()
      .then(result => this.userName = result.fullName);

    this.firstTitle = 'Welcome to our page!';
  }
}

angular.module('home')
  .service('userService', UserService)
  .controller('homeCtrl', homeCtrl);