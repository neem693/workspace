/**
 * 
 */
var x = 0;

$(document).ready(function() {
	/*
	 * $("#basic").on("click.basic.load",function(){
	 * $("#body2").on("load"("php_basic.html"); });
	 * $("#advance").on("click.advance.load",function(){
	 * $("#body2").load("php_advanced.html"); });
	 */

	/*
	 * $("#basic").click(function(event) {
	 * 
	 * $("#body2").load("php_basic.html"); });
	 * $("#advance").click(function(event) {
	 * 
	 * $("#body2").load("php_advanced.html"); });
	 */

	function hoverfix(event) {

		$("#body2").load("php_" + event.data.me + ".html", function() {
			window.location.href = window.location.pathname + "#index_subject";
		});

		$("#" + event.data.me).off({
			mouseover : hoveradd,
			mouseout : hoverclose
		});
		if (x != 0) {
			$(event.data.target).on({
				mouseover : hoveradd,
				mouseout : hoverclose
			}).removeClass("boxlist_HOVER");
		}
		x = 1;

	}

	function hoveradd(event) {

		$(this).addClass("boxlist_HOVER");
	}

	function hoverclose(event) {

		$(this).removeClass("boxlist_HOVER");
	}
	$("#basic").on({
		mouseover : hoveradd,
		mouseout : hoverclose
	});
	$("#basic").on("click", {
		me : "basic",
		target : "#advance,#sql,#xml,#ajax"
	}, hoverfix);
	$("#advance").on({
		mouseover : hoveradd,
		mouseout : hoverclose
	}).on("click", {
		me : "advance",
		target : "#basic,#sql,#xml,#ajax"
	}, hoverfix);
	$("#sql").on({
		mouseover : hoveradd,
		mouseout : hoverclose
	}).on("click", {
		me : "sql",
		target : "#basic,#advance,#xml,#ajax"
	}, hoverfix);
	$("#xml").on({
		mouseover : hoveradd,
		mouseout : hoverclose
	}).on("click", {
		me : "xml",
		target : "#basic,#advance,#sql,#ajax"
	}, hoverfix);
	$("#ajax").on({
		mouseover : hoveradd,
		mouseout : hoverclose
	}).on("click", {
		me : "ajax",
		target : "#basic,#advance,#sql,#xml"
	}, hoverfix);
	//$("#basic").trigger("mouseover");
	//$("#basic").trigger("click");

	
	// var boxlist_subject = $(".boxlist").html();
	// $(".boxlist").html("<a href = '#index_subject'>" + boxlist_subject);

	/* $("#basic").addClass("boxlist_HOVER"); */

});