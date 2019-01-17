const angular = require('angular');
const homeComponent = require('./home.component');
const GoatsListingComponent = require('../../containers/goatsListing/goatsListing');

const homeModule = angular.module('home', [])
  .component('home', homeComponent);

module.exports = homeModule;