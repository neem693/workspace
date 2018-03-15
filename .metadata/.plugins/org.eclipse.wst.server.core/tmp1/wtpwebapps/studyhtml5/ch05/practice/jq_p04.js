/**
 * 
 */

$(document).ready(function(){
	$("#goty").mouseenter(function(){
		$("#changeshow").html("<img alt= '2013' src = '../../images/goty/2013.jpg' /0>");
		$("#gotybutton").css("display","inline-block"); // 클릭하기 위해서 이 버튼이 만들어 져야 한다.
		$("#gotydouble").css("display","none"); //이 버튼을 더블클릭 할때 필요한 것이라서 월래 없어야 한다.
		$("#goty").text("2013");
		$("p").text("클릭");
	});
	$("#gotybutton").click(function(){
		$("#changeshow").html("<img alt= '2014' src = '../../images/goty/2014.jpg' /0>");
		$("p").text("마우스 빠져나오기");
		$("#gotydouble").css("display","none"); //이 버튼을 더블클릭 할때 필요한 것이라서 월래 없어야 한다.
		$("#goty").text("2014");
	});
	$("#gotybutton").mouseleave(function(){
		$("#changeshow").html("<img alt= '2015' src = '../../images/goty/2015.png' /0>");
		$("p").text("더블 클릭");
		$("#gotybutton").css("display","none");//이제 이 버튼이 사라져야 할 때,
		$("#gotydouble").css("display","inline-block");//더블클릭의 부활이다.
		$("#goty").text("2015");
	});
	$("#gotydouble").dblclick(function(){
		$("#changeshow").html("<img alt= '2016' src = '../../images/goty/2016.jpg' /0>");
		$("#goty").text("2016");
		$("#goty").css("display","none");
		$("#gotydouble").css("display","none");
		$("p").text("처으므로 f5");
	});
});