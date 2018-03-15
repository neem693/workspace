/**
 * 
 */

$(document).ready(function() {
	$("#go").click(function() {
		var text = {
			artist : $("#artist").val(),
			art : $("#art").val()
		};// 이런식으로 객체를 처음에 선언하지 않으면, 바꿀 수 없다.

		$.ajax({
			type : "POST",
			url : "jq_p09.jsp",
			data : text,
			success : function(data) {
				$("#subject").html(data);

			}

		});

	});

});
