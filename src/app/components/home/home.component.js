export class HomeController {
  /** @ngInject */
  constructor() {
    this.text = 'Hello from home component';
  }
}

export const HomeComponent = {
  templateUrl: 'app/components/home/home.html',
  controller: HomeController,
  controllerAs: 'homeCtrl'
};