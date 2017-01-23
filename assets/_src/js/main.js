(function() {
	console.log("main.js ran");
	plyr.setup(
		document.querySelectorAll('.js-video'),
		{controls: ['play-large', 'play', 'progress', 'fullscreen']
	});
	// $( "body" ).delay( 1000 ).queue(function(next){
  //   $(this).addClass("loaded");
  //   next();
	// });

})();
