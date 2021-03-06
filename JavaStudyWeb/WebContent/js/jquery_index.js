/**
 * 
 */
var count, imp_text, imp_value, subject, issub, target_ul, target_li, subject_bool;
var x = 0, y = 0;
var arr = [];
$(document).ready(function() {

	sort_subject();
	var show_sub_time = setTimeout(show_subject, 3000);

});
function sort_subject() {
	// /////////////////중요!////////////////////////
	/* h1태그가 너무 많아서 목록화 하는 작업을 하려한다. */
	/* subject 클래스를 가지고 있는 h1태그에 s로 id를 넣어준다 */
	/* h1 태그의 내용을 복사해서 아이디 list인 div에 숫자목록화하고 각각의 s id를 통해 링크화 한다. */
	/* h1 태그의 링크는 목차 방향으로 한다. */

	count = $(".subject").length;
	$("#list").append("<ol>");

	for (var i = 0; i < count; i++) {
		subject = $(".subject").eq(i);

		subject.attr("id", "s" + i);
		imp_text = $("#s" + i).text();
		$("#s" + i).html("<a>" + imp_text);

		// $("#c" + i + " a").attr("href","#b" +i);
		/*
		 * subject 클래스가 목차로 바로 갈 수 있도록 해주는 것을 말함. 근데 이렇게 하지말고 목차로 이동하는게 더 좋을듯
		 * 하다.
		 */
		if ((subject.attr("class").search(/sub\b/)) == -1)
			subject_bool = false;
		else
			subject_bool = true;

		if (subject_bool) {

			if (!issub)
				$("#list ol li").eq(i - 1).append("<ul>");
			target_ul = $("#list ol li ul").eq(x);
			target_ul.addClass("list_ul_item" + x);
			target_ul.append("<li><a>" + subject.text());
			target_li = $("ul.list_ul_item" + x + " li").eq(y);// 여기서 문제가 발생했다.
																// ul을 구분하고 li까지
																// 구분해야 했기 때문..
																// 따라서 그냥 클래스로 구분지었다.

			y++;
			issub = true;
		} else {
			$("#list ol").append("<li><a>" + subject.text());
			target_li = $("#list ol li").last();// 위에 추가했기 때문에
			if (issub) {
				issub = false;
				x++;
				y = 0;
			}

		}

		/*
		 * eq는 월래 0부터 시작한다. 클래스 엘리먼트도 0부터 시작해야 잘 시작된다.
		 */
		target_li.attr("id", "l" + i);
		$("#l" + i + " a").attr("href", "#s" + i);

	}
	$(".subject a").attr("href", "#index_subject");// .subject클릭하면 목차로 이동
	x = 0;

	/*
	 * c= $("h1").length; for(var i=0; i<c; i++){
	 * if("subject"!=$("h1").eq(i).attr("class")) x++; }
	 * $("#example").append(x);//이걸로 두번째 인덱스도 만들수 있을 거 같다.
	 */

	// ///////////////////중요!/////////////////////////
	/* 정규표현식 같은 내용을 계속 찾아볼 수 있게 북마크로 만들려한다. */
	/* 그래서 북마크 목록을 페이지에 표시하기 위한 작업을 시작할 것이다. */
	/* bookmark_list가 아이디인 div에 숫자로 된 목차를 추가한다 */
	/* 해당 목차에 북마크클래스가 추가된 내용을 하나씩 추가하고 각각을 링크한다. */
	/* 북마크 클래스도 각각 링크를 걸어 bookmark_list div 상단 방향으로 가게끔 한다. */
	count = $(".bookmark").length;
	$("#bookmark_list").append("<ol>");
	$("#bookmark_list ol").attr("id", "bol");

	for (var i = 0; i < count; i++) {
		$(".bookmark").eq(i).attr("id", "b" + i);

		imp_text = $("#b" + i).text();
		$("#b" + i).html("<a>" + imp_text);

		$("#bol").append("<li><a>" + imp_text);
		$("#bol li").eq(i).attr("id", "bli" + i);

		$("#bli" + i + " a").attr("href", "#b" + i);

	}
	$(".bookmark a").attr("href", "#bookmark_subject");
	$(".bookmark a").append("<span class = 'bookmark_color'>(북마크)");
	// ////////////////////여기까지 끝/////////////////////////
}
function show_subject() {
	/*
	 * subject 클래스를 가지고 있는 항목이 스크롤 탑이 자신의 할당에 있는 순간 해당 subject 클래스의 항목만이
	 * position:fix가 되어 상단에 있도록 한다. 이걸 할라면 1.배열로 top값을 저장. 2-1.첫번째 subject top보다
	 * 현재 문서 top이 높은지 판단 참이면, 현재 어디에 있는지 findIndex 메소드를 이용 판별, 해당 항목 position
	 * fix. 2-2.거짓이면, 모든 subject 포지션 픽스 클래스 해제. 2-3 마지막 subject를 findIndex하기
	 * 위해서는 배열상 찾을 수 없어 -1를 뱉으니 거기에 대한 따로 예외조건을 해야 함.
	 */
	count = $(".subject").length;
	for (var i = 0; i < count; i++) {
		var cor = $(".subject").eq(i).offset();
		arr.push(cor.top);
	}

	$(document).scroll(function() {
		imp_value = arr.findIndex(subject_scroll);
		if (imp_value == 0) {
			$("#subject_line").text("");
			/* 첫번째 스크롤 값이 나오기 전까진 모두 무효 이로 인해서 기준이 1 더 높음. */
		} else if (imp_value == -1) {
			$("#subject_line").html($(".subject").eq(arr.length - 1).html());
			/* 마지막 스크롤 값이 검색이 안되기에 따로 예외기준 둬야됨. 이로써 찾을 수 없다(-1)은 존재하지 않음 */
		} else {
			$("#subject_line").html($(".subject").eq(imp_value - 1).html());
			/* 그 외엔 모두 똑같이 적용. 다만 기준이 1 더 높으므로 -1를 해주는 것. */
			// $("#subject_line").append("/ " + arr[3]);
			// $("#subject_line").append("/ " + $(document).scrollTop());
		}
	});

	$(window).resize(function() {// 창 크기가 변경되면 스크롤 탑도 같이 변경되므로, 리사이즈 이벤트로 배열
		// 업데이트
		count = $(".subject").length;
		arr = [];
		for (var i = 0; i < count; i++) {
			var cor = $(".subject").eq(i).offset();
			arr.push(cor.top);
		}
		// $("#test").text("리사이즈 작동했다." + arr[3]);
		// #test는 없애겠다.
	});
}
function subject_scroll(sc_va) {
	return sc_va > $(document).scrollTop();
	// 쉽게말해서 현재 문서의 스크롤탑보다 높은 값을 리턴한다는 것.
	// sc_va는 여기서 arr의 배열 값을 의미한다.
}