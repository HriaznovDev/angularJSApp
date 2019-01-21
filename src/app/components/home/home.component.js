class HomeController {
  /** @ngInject */
  constructor() {
    this.text = 'Hello from home component';
  }
}

export const HomeComponent = {
  templateUrl: './home.html',
  controller: HomeController,
  controllerAs: 'homeCtrl'
};