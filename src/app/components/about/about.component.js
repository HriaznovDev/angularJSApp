export class AboutController {
  /** @ngInject */
  constructor() {
    this.text = 'Hello from about component';
  }
}

export const AboutComponent = {
  templateUrl: 'app/components/about/about.html',
  controller: 'AboutController',
  controllerAs: 'aboutCtrl'
};