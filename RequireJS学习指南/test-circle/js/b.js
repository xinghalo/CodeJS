define(function(require){
	// var a = require("js/a");
	console.log("in b");
	return {
		btest:function(){
			console.log("test in b");
			// a.atest();
			require("js/a").atest();
		}
	}
});