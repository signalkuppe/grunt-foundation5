page
({ 
		  path: 'index', 
		  layout: 'basic',
     	  blocks:
     	  { 
          	'header': 'header',
          	'content': 'content',
          	'sidebar': 'sidebar'
	      }, 
		  title: "Foundation | The most advanced responsive front-end framework in the world",
		  description: "The most advanced responsive front-end framework in the world",
	  	  postBuild: function ($)
	  	  {
	  	  	$('body').addClass("index");
	  	  }
});
