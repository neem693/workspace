/**
 * 
 */

$(document).ready(function() {

	var count;
	var imp_text;
	// /////////////////중요!////////////////////////
	/* h1태그가 너무 많아서 목록화 하는 작업을 하려한다. */
	/* subject 클래스를 가지고 있는 h1태그에 s로 id를 넣어준다 */
	/* h1 태그의 내용을 복사해서 아이디 list인 div에 숫자목록화하고 각각의 s id를 통해 링크화 한다. */
	/* h1 태그의 링크는 목차 방향으로 한다. */
	count = $(".subject").length;
	$("#list").append("<ol>");

	for (var i = 0; i < count; i++) {
		$(".subject").eq(i).attr("id", "s" + i);
		imp_text = $("#s" + i).text();
		$("#s" + i).html("<a>" + imp_text);

		// $("#c" + i + " a").attr("href","#b" +i);
		/*
		 * subject 클래스가 목차로 바로 갈 수 있도록 해주는 것을 말함. 근데 이렇게 하지말고 목차로 이동하는게 더 좋을듯
		 * 하다.
		 */

		$("#list ol").append("<li><a>" + $(".subject").eq(i).text());
		$("#list ol li").eq(i).attr("id", "l" + i);

		/*
		 * eq는 월래 0부터 시작한다. 클래스 엘리먼트도 0부터 시작해야 잘 시작된다.
		 */
		$("#l" + i + " a").attr("href", "#s" + i);

	}
	$(".subject a").attr("href", "#index_subject");// .subject클릭하면 목차로 이동

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
	$("#bookmark_list ol").attr("id","bol");
	
	for(var i =0;i<count;i++){
		$(".bookmark").eq(i).attr("id","b" + i);
		
		imp_text=$("#b" + i).text();
		$("#b" + i).html("<a>" + imp_text);
		
		
		$("#bol").append("<li><a>" + imp_text);
		$("#bol li").eq(i).attr("id","bli" + i);
		
		$("#bli" + i + " a").attr("href","#b" + i);
		
	}
	$(".bookmark a").attr("href","#index_bookmark");
	$(".bookmark a").append("<span class = 'bookmark_color'>(북마크)");
	
	$(".center").attr("target","_blank");
	

});