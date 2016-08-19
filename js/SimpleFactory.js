var simpleFactory = function(){
	var factory = {};
	
	factory.getName = function(name){
	    console.log('SimpleFactory.getName() with [' + name + ']');
		return 'SimpleFactory >>> ' + name;
	};
	
	return factory;
}