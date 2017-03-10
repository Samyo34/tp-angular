angular.module('myApp.panier',[])
	.value('tva',1.2)
	.service('servicePanier',function($rootScope, tva){
		var panier =[];
		this.addItem = function(item,quantity){
			var existe = false;
			for(var i in panier){
				if(panier[i].obj['ISBN-13'] === item['ISBN-13']){
					panier[i].qte++;
					existe = true;
					break;
				}
			}
			if(existe === false){
				panier.push({obj:item,qte:quantity});
			}
			
		};
		
		this.removeItem= function(item){
			for(var i in panier){
				if(panier[i].obj['ISBN-13'] === item['ISBN-13'] ){
					if(panier[i].qte>=1){
						panier[i].qte--;
					}
					else{
						panier[i] = undefined
					}
				}
			}
		};
		
		this.getHT = function(item){
			return item.obj.price * item.qte;
		}
		
		this.getTTC = function(item){
			return this.getHT() * tva;
		}
		
		$rootScope.getSizePanier = function(){
			return panier.reduce(function(previous,item){
				return previous + item.qte;
			},0);
		};
	});