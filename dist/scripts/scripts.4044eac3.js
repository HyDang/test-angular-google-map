"use strict";angular.module("testAngularGoogleMapApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","google-maps"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("testAngularGoogleMapApp").controller("MainCtrl",["$scope",function(a){a.map={center:{latitude:44.5403,longitude:-78.5463},zoom:8,mapTypeId:google.maps.MapTypeId.ROADMAP,infoWindowWithCustomClass:{options:{boxClass:"custom-info-window"}}}}]),angular.module("testAngularGoogleMapApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]);