'use strict';

angular.module('myApp',['ngRoute','ngSanitize','myApp.catalog','myApp.book'])
	.config(function($routeProvider){
		
		$routeProvider.when('/catalog',{
			templateUrl:'./view-catalog/catalog.html',
			controller:'catalogCtrl'
		});
		
		$routeProvider.when('/book/:id',{
			templateUrl:'./view-book/book.html',
			controller:'bookCtrl'
		});
	})	