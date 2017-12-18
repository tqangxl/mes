'use strict';

/**
 * @ngdoc service
 * @name mesUiApp.MachineService
 * @description
 * # MachineService
 * Service in the mesUiApp.
 */
angular.module('mesUiApp')
  .service('MachineService', function ($q, RestService) {
    this.getAllArticles = function () {
      return $q(function (resolve, reject) {
        RestService.get('/articles').then(function (articles) {
          resolve(articles);
        }, function (reason) {
          reject(reason);
        });
      });
    };

    this.getAllModels = function () {
      return $q(function (resolve, reject) {
        RestService.get('/models').then(function (models) {
          resolve(models);
        }, function (reason) {
          reject(reason);
        });
      });
    };

    this.getAllParams = function () {
      return $q(function (resolve, reject) {
        RestService.get('/machine').then(function (params) {
          resolve(params);
        }, function (reason) {
          reject(reason);
        });
      });
    };

    this.getParam = function (code) {
      return $q(function (resolve, reject) {
        RestService.get('/machine/' + code).then(function (param) {
          resolve(param);
        }, function (reason) {
          reject(reason);
        });
      });
    };

    this.setParam = function (param) {
      return $q(function (resolve, reject) {
        RestService.post('/machine', param).then(function (response) {
          resolve(response);
        }, function (reason) {
          reject(reason);
        });
      });
    };
  });
