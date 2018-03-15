/**
 * 
 */

function getVote(int){
	if(window.XMLHttpRequest){
		xmlhttp=new XMLHttpRequest();
		
	}else{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function(){
		if(this.readyState==4&&this.status==200){
			document.getElementById("poll").innerHTML=this.responseText;
		}
	}
	xmlhttp.open("GET","ajax_06.php?vote="+int,true);
	xmlhttp.send();
	
}


function renew(){
	if(window.XMLHttpRequest){
		xmlhttp=new XMLHttpRequest();
		
	}else{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function(){
		if(this.readyState==4&&this.status==200){
			document.getElementById("renew").innerHTML="완료";
		}
	}
	xmlhttp.open("GET","ajax_06_renew.php");
	xmlhttp.send();
	
}

$(document).ready(function(){
	$("input").on("click",function(){
		getVote($(this).val());
		$("#test").text($(this).val());
	});
	$("#new_click").on("click",function(){
		renew();
	})
})
