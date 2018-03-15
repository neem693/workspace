/**
 * 
 */
$(document).ready(function() {
	var value;

	$(document).ajaxStart(function() {
		$("#loading").css("display", "block");
		$("#rssOutput").css("display", "none");
	});
	$(document).ajaxComplete(function() {
		$("#loading").css("display", "none");
		$("#rssOutput").css("display", "block");
	});

	$("#select_rss").on("change", function() {
		value = $("#select_rss").val();
		showResult(value);

	});
	/*
	 * function showResult(str) { if (str.length == 0) {
	 * document.getElementById("rssOutput").innerHTML = ""; return; } if
	 * (window.XMLHttpRequest) { xmlhttp = new XMLHttpRequest(); } else {
	 * xmlhttp = new ActiveXobject("Microsoft.XMLHTTP"); }
	 * xmlhttp.onreadystatechange = function() { if (this.readyState == 4 &&
	 * this.status == 200) { document.getElementById("rssOutput").innerHTML =
	 * this.responseText; } } xmlhttp.open("GET", "ajax_05.php?q=" + str, true);
	 * xmlhttp.send(); }
	 */
	function showResult(str) {
		if (str.length == 0) {
			document.getElementById("rssOutput").innerHTML = "";
			return;
		}
		$.ajax({
			type : "post",
			url : "ajax_05.php?q=" + str,
			success : function(result) {
				$("#rssOutput").html(result);

			}
		})
	}

});
