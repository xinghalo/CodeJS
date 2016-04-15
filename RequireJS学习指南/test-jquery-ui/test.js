requirejs.config({
    baseUrl: './',
    paths:{
        'jquery':'lib/jquery',
        'jquery-ui':'lib/jquery-ui',
        'jquery-dataTables':'lib/jquery.dataTables'
    },
    shim:{
    	'jquery-ui':['jquery'],
        'jquery-dataTables':['jquery']
    }
});

requirejs(['js/a'],
function (a){
    console.log("in test");
    a.test();
});