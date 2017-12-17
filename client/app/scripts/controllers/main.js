/**
 * @ngdoc function
 * @name mesUiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mesUiApp
 */
angular.module('mesUiApp')
  .controller('MainCtrl', function ($scope, MachineService) {
    $scope.obj = {
      models: [],
      params: []
    };

    $scope.getAllModels = function () {
      MachineService.getAllModels().then(function (models) {
        $scope.obj.models = models;
      }, function (reason) {
        console.error(reason);
      });
    };

    $scope.getAllParams = function () {
      MachineService.getAllParams().then(function (models) {
        $scope.obj.models = models;
      }, function (reason) {
        console.error(reason);
      });
    };

    $scope.getAllModels();
    $scope.getAllParams();

    // polling machine
    setInterval(function () {
      $scope.getAllParams();
    }, config.POLLING_INTERVAL + Math.floor(Math.random() * 1000));

  });
