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
      version: configs.VERSION,
      header: configs.TITLE,
      footer: configs.DESCRIPTION,
      logo: configs.LOGO
    };
  });
