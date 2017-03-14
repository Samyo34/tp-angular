'use strict';

angular.module('myApp.book', ['ngRoute','ngSanitize'])
	.controller('bookCtrl',function($scope,serviceCatalog,$routeParams,$rootScope, uppercaseFilter){
		$scope.ready = false;
		$scope.livre = undefined;
		serviceCatalog.getBook($routeParams.id).then(function(book){
			$scope.ready = true;
			$scope.livre = book;
			$rootScope.titre = 'LIVRE '+$scope.livre.title;
		})
	})