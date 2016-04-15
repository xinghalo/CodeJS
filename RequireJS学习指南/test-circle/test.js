requirejs.config({
    baseUrl: './'
});

requirejs(['js/a'],function (a){
    console.log("in test");
    a.testfromb();
});