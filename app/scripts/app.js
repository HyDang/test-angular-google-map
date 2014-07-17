'use strict';

/**
 * @ngdoc overview
 * @name testAngularGoogleMapApp
 * @description
 * # testAngularGoogleMapApp
 *
 * Main module of the application.
 */
angular
  .module('testAngularGoogleMapApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'google-maps',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
