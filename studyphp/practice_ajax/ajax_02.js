/**
 * 
 */

$(document).ready(function() {
$("#sel_art").on("change",function(){
	var value = $("#sel_art").val();
	showUser(value);
});
	function showUser(str) {
		if (str == "") {
			
			document.getElementById("txtHint").innerHTML = "";
			return;

		}else{
			if(window.XMLHttpRequest){
				xmlhttp = new XMLHttpRequest();
			}else{
				xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
			}
			xmlhttp.onreadystatechange = function(){
				if(this.readyState ==4 && this.status==200){
					document.getElementById("txtHint").innerHTML = this.responseText;
				}
			};
			xmlhttp.open("GET","ajax_02.php?q=" + str,true);
			xmlhttp.send();
		}
	}

});