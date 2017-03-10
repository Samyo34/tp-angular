angular.module('myApp.book')
.filter('interval',function(){
	return function(objects,params){
		if(angular.isArray(objects) === true){
			return objects.filter(function(book){
				return params.min === undefined || params.min === null || book[params.type]>params.min;
			}).filter(function(book){
				return params.max === undefined || params.max === null || book[params.type]<params.max;
			});
		}
		else{
			return objects;
		}
	}
});