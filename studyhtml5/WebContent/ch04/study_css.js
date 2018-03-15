/**
 * width를 조지기 위해 만들었다.
 */

$(document).ready(function () {
    $("#width").append($("body").width());

    var count;
    var imp_text;
    var x = 0;
    var ol_id;
    var target_id;
    var li_id;
    // /////////////////중요!////////////////////////
    /* h1태그가 너무 많아서 목록화 하는 작업을 하려한다. */
    /* subject 클래스를 가지고 있는 h1태그에 s로 id를 넣어준다 */
    /* h1 태그의 내용을 복사해서 아이디 list인 div에 숫자목록화하고 각각의 s id를 통해 링크화 한다. */
    /* h1 태그의 링크는 목차 방향으로 한다. */
    count = $("h1").length;
    $("#list").append("<ol>");
    $("#list ol").attr("id", "sli");
    ol_id = "sli";

    for (var i = 0; i < count; i++) {
        target_id = "s" + i;
        li_id = "l" + i;
        $("h1").eq(i).attr("id", target_id);
        imp_text = $("#" + target_id).text();
        $("#" + target_id).html("<a>" + imp_text);

        // $("#c" + i + " a").attr("href","#b" +i);
        /*
         * subject 클래스가 목차로 바로 갈 수 있도록 해주는 것을 말함. 근데 이렇게 하지말고 목차로 이동하는게 더 좋을듯
         * 하다.
         */

        $("#" + ol_id).append("<li><a>" + imp_text);
        $("#" + ol_id + " li").eq(i).attr("id", li_id);

        /*
         * eq는 월래 0부터 시작한다. 클래스 엘리먼트도 0부터 시작해야 잘 시작된다.
         */
        $("#" + li_id + " a").attr("href", "#" + target_id);

    }
    $("h1 a").attr("href", "#top");// h1클릭하면 목차로 이동

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
    ol_id = "bol";

    for (var i = 0; i < count; i++) {
        li_id = "bli" + i;
        var pre_id = $(".bookmark").eq(i).attr("id");
        if (pre_id != null)
            target_id = pre_id;
        else {
            target_id = "b" + i;
            $(".bookmark").eq(i).attr("id", target_id);
        }

        imp_text = $("#" + target_id).text();
        $("#" + target_id).html("<a>" + imp_text);

        $("#" + ol_id).append("<li><a>" + imp_text);
        $("#" + ol_id + " li").eq(i).attr("id", li_id);

        $("#" + li_id + " a").attr("href", "#" + target_id);

    }
    $(".bookmark a").attr("href", "#top");
    $(".bookmark a").append("<span class = 'bookmark_color'>(북마크)");
});