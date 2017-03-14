angular.module('myApp.panier')
.controller('panierCtrl',function($scope,servicePanier){
	$scope.getPanier = function(){
		return servicePanier.getPanier();
	}
	
	$scope.supprime = function(item){
		servicePanier.removeItem(item);
	}
	
	$scope.getHTItem = function(item){
		return servicePanier.getHT(item);
	}
	
	$scope.getTTCItem = function(item){
		return servicePanier.getTTC(item);
	}
	
	$scope.getTotalHT = function(){
		return servicePanier.getTotalHT();
	}
	
	$scope.getTotalTTC = function(){
		return servicePanier.getTotalTTC();
	}
});