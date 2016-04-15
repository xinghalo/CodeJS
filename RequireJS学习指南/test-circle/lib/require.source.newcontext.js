function newContext(contextName){

    function getModule(depMap) {
        var id = depMap.id,
            mod = getOwn(registry, id);

        if (!mod) {
            mod = registry[id] = new context.Module(depMap);
        }

        return mod;
    }
	
    function checkLoaded() {
    	
    }

	context = {
		//...
		makeRequire: function (relMap, options) {
		 	//核心
            function localRequire(deps, callback, errback) {
            	//真正的核心
            	context.nextTick(function () {
                    intakeDefines();

                    requireMod = getModule(makeModuleMap(null, relMap));//主要看这里吧

                    requireMod.skipMap = options.skipMap;

                    requireMod.init(deps, callback, errback, {
                        enabled: true
                    });

                    checkLoaded();
                });
            }

            return localRequire;
		},
		load: function (id, url) {
            req.load(context, id, url);
        },
        onScriptLoad : function() {
        	context.completeLoad();
        },
        completeLoad : function() {
        	takeGlobalQueue();
        	while(defQueue.length){

        	}
        	mod = getOwn(registry, moduleName);
        	checkLoaded();
        }
		//...
	}

	Module.prototype = {
		init : function(depMaps, factory, errback, options){
			if (options.enabled || this.enabled) {
                this.enable();
            } else {
                this.check();
            }
		},
		fetch : function(){
			if (this.shim) {//依赖
                context.makeRequire(this.map, {
                    enableBuildCallback: true
                })(this.shim.deps || [], bind(this, function () {
                    return map.prefix ? this.callPlugin() : this.load();
                }));
            } else {
                //Regular dependency.
                return map.prefix ? this.callPlugin() : this.load();//是否包含前缀 text!xxx
            }
		},
		load: function () {
            var url = this.map.url;

            //Regular dependency.
            if (!urlFetched[url]) {
                urlFetched[url] = true;
                context.load(this.map.id, url);
            }
        },
		check : function(){
			this.fetch();
		},
		enable : function(){
			this.check();
		}
	};
	context.require = context.makeRequire();//其实是把localRequire赋值给context.require
    return context;
};

req.nextTick = typeof setTimeout !== 'undefined' ? function (fn) {
    setTimeout(fn, 4);
} : function (fn) { fn(); };