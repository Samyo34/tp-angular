'use strict';

angular.module('myApp.catalog', [])
	.controller('catalogCtrl',function($scope, $http) {
				$scope.catalog = undefined;
				var url = 'https://api.mongolab.com/api/1/databases/books/collections/books/?apiKey=d3qvB8ldYFW2KSynHRediqLuBLP8JA8i'
				$http.get(url).then(function(reponse) {
					// console.log('OK',reponse.data);
					$scope.catalog = reponse.data;
				});

	});
