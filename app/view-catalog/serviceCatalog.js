(function(){
	'use strict';
	angular.module('myApp.catalog')
	.value('rechercheService',{})
	.service('serviceCatalog',function($http){
		
		var url = 'https://api.mongolab.com/api/1/databases/books/collections/books/?apiKey=d3qvB8ldYFW2KSynHRediqLuBLP8JA8i';
		var promise = $http.get(url).then(function(response){
			return response.data;
		},function(){
			console.log('Flûte alors... plus d\'internet mondiale :/');
		});
		
		this.getList = function(){
			return promise;

		};
		
		this.getBook = function(id){
			return promise.then(function(response){
				for(var index in response){
					if(response[index]._id.$oid===id){
						return response[index];
					}
				}
				throw "Livre non trouvé";
			});
		}
	})
})();



		