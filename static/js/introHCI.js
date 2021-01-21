'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();

})



/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Testing");
		$("#testjs").text("Please wait...");
		$(".thumbnail").click(projectClick);


	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	
}

function projectClick(e){
	console.log("CLick");
	e.preventDefault();
	    var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) {
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    } else {
       $(description).hide(); 
   }
}
    
    


$("testjs").click(function(e){
	$(".jumbotron h1").text("Javascript has taken over");
	$(".jumbotron p").addClass("active");
	$(".jumbotron p").toggleClass("active");
	
});
