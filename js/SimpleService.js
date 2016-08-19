var simpleService = function(){
	this.clickName = function(name){
	    console.log('SimpleService.clickName() with [' + name + ']');
		alert('SimpleService >>> ' + name);
	};
}