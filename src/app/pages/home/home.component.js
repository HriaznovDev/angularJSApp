const template = require('./home.html');
const controller = require('./home.controller');

const homeComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

module.exports = homeComponent;