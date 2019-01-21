class AboutController {
  /** @ngInject */
  constructor() {
    this.text = 'Hello from about component';
  }
}

export const AboutComponent = {
  templateUrl: './about.html',
  controller: AboutController,
  controllerAs: 'aboutCtrl'
};