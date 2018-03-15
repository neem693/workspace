/**
 * 
 */
$(document).ready(function(){
	$("#display").click(function(){
		$("#displayArea").html("<img src = '../../images/borderlands2.jpg' border='0'/>");
	});
	$("#reset").click(function(){
		$("#displayArea").html("이곳의 내용 변경");
	});
});