'use strict';

angular.module('myApp.catalog', ['myApp.panier'])
	.controller('catalogCtrl',function($scope, serviceCatalog, servicePanier,rechercheService) {
		$scope.catalog = undefined;
		serviceCatalog.getList().then(function(response){
			$scope.catalog = response;
		});
		
		$scope.recherche = rechercheService;
//		var url = 'https://api.mongolab.com/api/1/databases/books/collections/books/?apiKey=d3qvB8ldYFW2KSynHRediqLuBLP8JA8i'
//		$http.get(url).then(function(reponse) {
//			// console.log('OK',reponse.data);
//			$scope.catalog = reponse.data;
//		});
		
		
		
		$scope.ajoute = function(item){
			servicePanier.addItem(item,1);
		}		
	})
	
	

	
	
