$(document)
		.ready(
				function() {
					var hint;
					var value_old="";
					var value;
					
					$("#text_input").on("focus", repeat);
					function repeat() {
						hint = setInterval(function(){
							value = $("#text_input").val();
							if(value_old!==value){
								showResult(value);
							}
							value_old = value;
						},1000)
						}
					$("#text_input").on("blur",turnoff);
					function turnoff(){
						clearInterval(hint);
					}

					function showResult(str) {
						if (str.length == 0) {
							document.getElementById("livesearch").innerHTML = "";

							document.getElementById("livesearch").style.border = "0px";
							return;
						}
						if (window.XMLHttpRequest) {
							xmlhttp = new XMLHttpRequest();
						} else {
							xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
						}
						xmlhttp.onreadystatechange = function() {
							
							if (this.readyState == 4 && this.status == 200) {

								document.getElementById("livesearch").innerHTML = this.responseText;
								document.getElementById("livesearch").style.border = "1px solid #A5ACB2";

							}
						}
						xmlhttp.open("GET", "ajax_04.php?q=" + str, true);
						xmlhttp.send();
					}
				})