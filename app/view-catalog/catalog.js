'use strict';

angular.module('myApp.catalog', ['myApp.panier'])
	.controller('catalogCtrl',function($scope, $http, servicePanier) {
		$scope.catalog = undefined;
		var url = 'https://api.mongolab.com/api/1/databases/books/collections/books/?apiKey=d3qvB8ldYFW2KSynHRediqLuBLP8JA8i'
		$http.get(url).then(function(reponse) {
			// console.log('OK',reponse.data);
			$scope.catalog = reponse.data;
		});
		
		var ajoute = function(item){
			servicePanier.addItem(item);
		}
		
		var getPanier = function(){
			return ServicePanier.getPanier();
		}
				
	})

	
	
