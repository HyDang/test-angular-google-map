'use strict';

/**
 * @ngdoc function
 * @name testAngularGoogleMapApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testAngularGoogleMapApp
 */
angular.module('testAngularGoogleMapApp')
  .controller('MainCtrl', function ($scope) {
    	$scope.map = {
		    center: {
		        latitude: 44.5403,
		        longitude: -78.5463
		    },
		    zoom: 8,
		    mapTypeId: google.maps.MapTypeId.ROADMAP,
		    infoWindowWithCustomClass: {
				options: {
			        // disableAutoPan: false,
			        boxClass: 'custom-info-window',
			        // alignBottom: true
				},
		    }		    
		};
  });
