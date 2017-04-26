$(document).ready(function(){

});

/*
- have the text in the ```<p>``` tag slide down 
along with a "Read Less" link in the blog post using  
```$.slideDown()``` and ```$.show()```
*/


$("#show-this-on-click").hide();
$(".readmore").click(showMoreText);


function showMoreText(event){
	event.preventDefault();
  $("#show-this-on-click,.readless").show();
  $(".readmore").hide();

}

$(".readless").click(showLessText);

function showLessText(event){
	event.preventDefault();
	$(".readless,#show-this-on-click").hide();
	$(".readmore").show();
}

$(".learnmore").click(showMoreText2);


function showMoreText2(event){
	event.preventDefault();
	$("#learnmoretext").show();
	$(".learnmore").hide();
}


/*
$(".readless").click(hideAnswer2);

$(".readmore").click(showAnswer2);
function showAnswer2() {
  $("readless")
}

- hide the "Read More" link using ```$.hide()```
*/
