'use strict';

/**
 * @ngdoc service
 * @name mesUiApp.RestService
 * @description
 * # RestService
 * Service in the mesUiApp.
 */
angular.module('mesUiApp')
  .service('RestService', function ($q, $http) {
    this.get = function (endpoint) {
      return $q(function (resolve, reject) {
        $http.get(configs.API_URL + endpoint).then(function (data) {
          resolve(data.data);
        }, function (err) {
          reject(err);
        });
      });
    };

    this.post = function (endpoint, obj) {
      return $q(function (resolve, reject) {
        $http.post(configs.API_URL + endpoint, obj).then(function (data) {
          resolve(data.data);
        }, function (err) {
          reject(err);
        });
      });
    };

    this.delete = function (endpoint) {
      return $q(function (resolve, reject) {
        $http({
          url: configs.API_URL + endpoint,
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          }
        }).then(function (data) {
          resolve(data.data);
        }, function (err) {
          reject(err);
        });
      });
    };
  });
