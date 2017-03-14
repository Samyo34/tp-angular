'use strict';

angular.module('myApp',['ngRoute','ngSanitize','myApp.catalog','myApp.book','myApp.panier','myApp.forms'])
	.config(function($routeProvider){
		
		$routeProvider.when('/catalog',{
			templateUrl:'./view-catalog/catalog.html',
			controller:'catalogCtrl'
		});
		
		$routeProvider.when('/book/:id',{
			templateUrl:'./view-book/book.html',
			controller:'bookCtrl'
		});
		
		$routeProvider.when('/panier',{
			templateUrl:'./view-panier/panier.html',
			controller:'panierCtrl'
		});
		
		$routeProvider.when('/login',{
			templateUrl:'./foms.html',
			controller:'formsCtrl'
		});
	})	