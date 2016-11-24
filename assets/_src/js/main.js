(function() {
	console.log("main.js ran");

	$( "body" ).delay( 1000 ).queue(function(next){
    $(this).addClass("loaded");
    next();
	});

})();
