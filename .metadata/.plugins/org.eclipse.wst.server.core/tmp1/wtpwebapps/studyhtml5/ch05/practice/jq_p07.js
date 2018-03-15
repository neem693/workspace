/**
 * 
 */

$(document).ready(function(){
	$(window).resize(function(){
		$("#show1").html("<img alt = '화면을 줄였구나' src = '../../images/goty/2015.png'/0>");
		$("#display_none").css("display","block");
		
	});
	
	$(document).scroll(function(){
		$("#show2").html("<img alt = '화면을 스크롤 했구나' src = '../../images/goty/2016.jpg' /0>");
		$("#display_none").css("display","block");
	});
});