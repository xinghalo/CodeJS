define(function(require){
	var b = require("js/b");
	console.log("in a");
	return {
		atest:function(){
			console.log("test in a");
		},
		testfromb:function(){
			console.log("testfromb in a");
			b.btest();
		}
	}
});