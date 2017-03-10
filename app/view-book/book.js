'use strict';

angular.module('myApp.book', ['ngRoute','ngSanitize'])
	.controller('bookCtrl',function($scope,$http,$routeParams,$rootScope, uppercaseFilter){
		$scope.ready = false;
		$scope.livre = undefined;
		var id =$routeParams.id;
		var url = 'https://api.mongolab.com/api/1/databases/books/collections/books/'+id+'?apiKey=d3qvB8ldYFW2KSynHRediqLuBLP8JA8i'
		$http.get(url).then(function(reponse) {
			$scope.livre = reponse.data;
			$rootScope.titre = "LIVRE "+ uppercaseFilter(reponse.data.title);
		});
		$scope.ready = true;
	})