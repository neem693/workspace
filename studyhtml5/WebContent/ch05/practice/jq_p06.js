/**
 * 
 */

$(document).ready(function(){
	$("input").focus(function(){
		$(this).css("background","#828282");
		$(this).css("color","white");
		
	});
	$("input").blur(function(){
		$(this).css("background","#ffbfdf");
		$(this).css("color","#545656");
	});
	
});