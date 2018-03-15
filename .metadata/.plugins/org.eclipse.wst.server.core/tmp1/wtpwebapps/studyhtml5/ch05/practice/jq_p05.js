/**
 * 
 */


$(document).ready(function(){
	$(document).keydown(function(){
		$("#display").css("background","red");
		$("#display").css("color","yellow");
	});
	
	
	$(document).keyup(function(){
		$("#display").css("background","black");
		$("#display").css("color","white");
	});

	
	
	
	
});