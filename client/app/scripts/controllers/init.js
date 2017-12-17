'use strict';

/**
 * @ngdoc function
 * @name mesUiApp.controller:InitCtrl
 * @description
 * # InitCtrl
 * Controller of the mesUiApp
 */
angular.module('mesUiApp')
  .controller('InitCtrl', function ($scope) {
    $scope.appDetails = {
      version: config.VERSION,
      header: config.TITLE,
      footer: config.DESCRIPTION,
      logo: config.LOGO
    };
  });
