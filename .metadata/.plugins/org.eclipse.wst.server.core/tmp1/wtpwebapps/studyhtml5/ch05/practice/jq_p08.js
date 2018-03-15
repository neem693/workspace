/**
 * 
 */
var x = 0;
var dir = "../../ch04/practice/css_p20.html";
var dir1 = "jq_p04.html";
var link = "요요요";
var temp;

$(document).ready(
		function() {

			$("#gotylist").click(
					function() {
						if (x == 1) {
							alert("이미 로드되었는데요?");
							return;
						}
						x = 1;
						$("#display").load(
								dir,
								function(response, stu, xtr) {
									if (stu == "success") {// 서버
										// 요청
										// 성공 시

										$("#display link").attr("href", "../../ch04/practice/style20_goty.css");
										//경로만 제대로 맞춰주면 된다.
										
										alert("로드 성공!"); // 메시지
									}
									if (stu == "error")
										alert("에러: " + xhr.status + ": "
												+ xhr.stu);

								});

					});
			$("#gotyshow").click(function() {
				x=0;
				$("#display").load(dir1, function(response, stu, xtr){
					if(stu == "success"){
						alert("로드성공");
					};
					if(stu=="error"){
						alert("에러" + xtr.status + ":" + xtr.stu);
					};
				});
			});
		});
