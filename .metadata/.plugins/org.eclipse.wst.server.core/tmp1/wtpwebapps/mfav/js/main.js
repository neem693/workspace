var t = 1;

$(document).ready(function() {
	if (t == 1) {
		$("aside").text(t);

		/*
		 * 별로에요
		 */

		$("#one").mouseenter(function() {// 별로에요.에 마우스가 들어가면, 해당하는 곳에 색깔이 있는
			// 이미지가
			// 들어간다.
			mark(1);
			$("aside").append(t);
		}).mouseleave(function() {// 별로에요. 마우스가 나가면, 해당 하는곳이 다시 색깔 없는
			// 곳으로
			// 변한다.
			unmark(1);
		});
		$("#one").mouseleave(function() {// 별로에요. 마우스가 나가면, 해당 하는곳이 다시 색깔 없는
			// 곳으로
			// 변한다.
			unmark(1);
		});
		/*
		 * 좋아요
		 */
		$("#two").mouseenter(function() {// 좋아요.
			mark(2);
		});
		$("#two").mouseleave(function() {// 좋아요. 마우스가 나가면, 해당 하는곳이 다시 색깔 없는
			// 곳으로
			// 변한다.
			unmark(2);
		});

		/*
		 * 정말 좋아요
		 */

		$("#three").mouseenter(function() {// 정말 좋아요.
			mark(3);
		});
		$("#three").mouseleave(function() {// 정말 좋아요. 마우스가 나가면, 해당 하는곳이 다시 색깔
			// 없는
			// 곳으로
			// 변한다.
			unmark(3);
		});
		/*
		 * 아래로는 클릭 하는 작업
		 * 코딩*******************************************************
		 */
		/*
		 * 별로에요 클릭
		 */
		$("aside").append(t);
	}
	$("#one").click(function() {

		fix(1);
		t = 2;

	});
	$("#two").click(function() {

		fix(2);
		t = 2;

	});
	$("#three").click(function() {

		fix(3);
		t = 2;

	});
	$("#before_art").click(function() {
		back();
		$("aside").append(t);
	});
});

function mark(n) {
	// if (t == 1) {
	switch (n) {
	case 1:

		$("#bad").css("border", "black 1px dotted");// 배드 쪽 테두리
		$("#1").attr("src", "img/arrow1(deep).png");
		$("#2").attr("src", "img/arrow2(deep).png");
		$("#3").attr("src", "img/arrow3(deep).png");
		
		break;
	case 2:
		$("#good").css("border", "blue 1px dotted");// 가운데 파란색 쪽 테두리
		$("#4").attr("src", "img/arrow4(deep).png");
		$("#5").attr("src", "img/arrow5(deep).png");
		break;

	case 3:
		$("#very_good").css("border", "red 1px dotted");// 오른쪽 빨간색 테두리
		$("#6").attr("src", "img/arrow6(deep).png");
		$("#7").attr("src", "img/arrow7(deep).png");
		break;
	}
	// }
}
function unmark(n) {
	// if (t == 1) {

	switch (n) {
	case 1:
		$("#bad").css("border", "");
		$("#1").attr("src", "img/arrow1.png");
		$("#2").attr("src", "img/arrow2.png");
		$("#3").attr("src", "img/arrow3.png");
		break;
	case 2:
		$("#good").css("border", "");
		$("#4").attr("src", "img/arrow4.png");
		$("#5").attr("src", "img/arrow5.png");
		break;
	case 3:
		$("#very_good").css("border", "");
		$("#6").attr("src", "img/arrow6.png");
		$("#7").attr("src", "img/arrow7.png");
		break;
	case 4:
		$("#bad").css("border", "");
		$("#1").attr("src", "img/arrow1.png");
		$("#2").attr("src", "img/arrow2.png");
		$("#3").attr("src", "img/arrow3.png");

		$("#good").css("border", "");
		$("#4").attr("src", "img/arrow4.png");
		$("#5").attr("src", "img/arrow5.png");

		$("#very_good").css("border", "");
		$("#6").attr("src", "img/arrow6.png");
		$("#7").attr("src", "img/arrow7.png");
		break;
	}
	// }
}
function fix(n) {
	if (t == 1) {
		$("#before").css("display", "block");
		$(".arrow").css("filter", "opacity(30%)");
		$("#one").unbind('mouseenter mouseleave');
		$("#two").unbind('mouseenter mouseleave');
		$("#three").unbind('mouseenter mouseleave');
		switch (n) {
		case 1:
			mark(1);
			$("#bad").css("border", "");
			$("#one").attr("class", "select one_selected");
			$("#two").attr("class", "select_cancel two_cancel");
			$("#three").attr("class", "select_cancel three_cancel");
			arrow_select(1);
			break;

		case 2:
			mark(2);
			$("#good").css("border", "");
			$("#two").attr("class", "select two_selected");
			$("#one").attr("class", "select_cancel one_cancel");
			$("#three").attr("class", "select_cancel three_cancel");
			break;
		case 3:
			mark(3);
			$("#very_good").css("border", "");
			$("#three").attr("class", "select three_selected");
			$("#two").attr("class", "select_cancel two_cancel");
			$("#one").attr("class", "select_cancel one_cancel");
			break;
		}
	}

}
function back() {
	$("#before").css("display", "none");
	$("#one").bind({
		mouseenter : function() {
			mark(1)
		},
		mouseleave : function() {
			unmark(1)
		}
	});
	$("#one").attr("class", "select one");
	$("#two").bind({
		mouseenter : function() {
			mark(2)
		},
		mouseleave : function() {
			unmark(2)
		}
	});
	$("#two").attr("class", "select two");
	$("#three").bind({
		mouseenter : function() {
			mark(3)
		},
		mouseleave : function() {
			unmark(3)
		}
	});
	$("#three").attr("class", "select three");
	t = 1;
	unmark(1), unmark(2), unmark(3);
	$(".arrow").css("filter", "opacity(100%)");
	$(".arrow").css("transform","scale(1,1)");
	$("aside").text("before");
}

function arrow_select(n) {
	switch (n) {
	case 1:
		$("#1,#2,#3").on({
			mouseover : function() {
				$(this).css("filter", "opacity(100%)");
				$(this).css("cursor", "pointer");
				$(this).css("transform", "scale(1.1,1.1)");

			},
			mouseout : function() {

				$(this).css("filter", "opacity(30%)");

				$(this).css("transform", "scale(1,1)");

			},
			click: function() {
				mark(1),mark(2),mark(3);
				$("#bad, #good, #very_good").css("border", "");
				$("#1,#2,#3").off("mouseout mouseover click");
				$("#1,#2,#3").css("cursor","default");
				
				
				
			}
		});
		/*
		$("#2").on("click", function() {
			mark(1);
			$(this).off("mouseout");
			$(this).off("mouseover");
			$(this).css("filter", "blur(3px)");
			$("#1,#3").off("click");
		});
		$("#3").on("click", function() {mark(1);
			$(this).off("mouseout");
			$(this).off("mouseover");
			$(this).css("filter", "blur(3px)");
			$("#1,#2").off("click");
		});*/
		/*
		 * $("#2").on({mouseover: function(){
		 * $(this).css("filter","opacity(100%)");
		 * $(this).css("cursor","pointer");
		 * $(this).css("transform","scale(1.1,1.1)"); }, mouseout: function(){
		 * $(this).css("filter","opacity(50%)");
		 * 
		 * $(this).css("transform","scale(1,1)"); }, click: function(){
		 * $(this).css("filter","blur(3px)"); } }); $("#3").on({mouseover:
		 * function(){ $(this).css("filter","opacity(100%)");
		 * $(this).css("cursor","pointer");
		 * $(this).css("transform","scale(1.1,1.1)"); }, mouseout: function(){
		 * $(this).css("filter","opacity(50%)");
		 * 
		 * $(this).css("transform","scale(1,1)"); }, click: function(){
		 * $(this).css("filter","blur(3px)"); } });
		 */
		break;
	}
}
function arrow_select_on(){
	
}