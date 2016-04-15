var requirejs,require,define;
(function(global){
	//定义环境变量

	//定义各种方法

	//检查requirejs,require,define

	//核心部分
	function newContext(){}//定义核心部分方法
	
	req = requirejs = function(){//定义req
		//...
		return context.require();
	};

	req.config = function(){};

    req({});//创建默认的上下文

    req.createNode = function (config, moduleName, url) {
        var node = config.xhtml ?
                document.createElementNS('http://www.w3.org/1999/xhtml', 'html:script') :
                document.createElement('script');
        node.type = config.scriptType || 'text/javascript';
        node.charset = 'utf-8';
        node.async = true;
        return node;
    };

    //洋洋洒洒，加载代码
    req.load = function(){
    	node = req.createNode(config, moduleName, url);//创建节点
    	node.addEventListener('load', context.onScriptLoad, false);//添加load事件
    	if (baseElement) {//插入到head里面
            head.insertBefore(node, baseElement);
        } else {
            head.appendChild(node);
        }
    };

    if (isBrowser && !cfg.skipDataMain) {
    	//加载main.js
    }

    define = function(){};

    req.exec =function(){};

    req(cfg);//执行配置文件

})(this);