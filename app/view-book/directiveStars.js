(function(){
	'use strict';
	angular.module('myApp.book')
	.directive('stars',function(){
		return {
			restrict:'A',
			scope:false,
			link:function(scope,element,attrs){
				scope.$watch(attrs.stars,function(value){
					for(var i=0;i<value;i++){
						element.append("*");
					}
				})
			}
		}

		
	})
})();