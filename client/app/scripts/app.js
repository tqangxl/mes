'use strict';

/**
 * @ngdoc overview
 * @name mesUiApp
 * @description
 * # mesUiApp
 *
 * Main module of the application.
 */
angular
  .module('mesUiApp', [
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
