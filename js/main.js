

	$("#show-this-on-click").hide();
$(".readmore").click(showMoreText);


function showMoreText(event){
	event.preventDefault();
  $("#show-this-on-click,.readless").slideDown();
  $(".readmore").hide();

}

$(".readless").click(showLessText);

function showLessText(event){
	event.preventDefault();
	$(".readless,#show-this-on-click").slideUp();
	  $(".readmore").show();

}

$(".learnmore").click(showMoreText2);


function showMoreText2(event){
	event.preventDefault();
	$("#learnmoretext").show();
	$(".learnmore").hide();
}


$(document).ready(function(){


});


