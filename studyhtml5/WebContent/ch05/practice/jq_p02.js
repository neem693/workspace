/**
 * 
 */

$(document).ready(function() {
	$("#hide_bl").click(function() {
		$("#bl").hide();
		$("#hide_b1").text($("#hide_dai").text());
	});
	$("#hide_dai").click(function() {
		$("#dai").hide();
	});
	$("#hide_witcher").click(function() {
		$("#witcher").hide();
	});
	$("#hide_lou").click(function() {
		$("#lou").hide();
	});

	$("#all_hide").click(function() {
		$("#bl").hide();
		$("#dai").hide();
		$("#witcher").hide();
		$("#lou").hide();
	});
	$("#all_show").click(function() {
		$("#bl").show();
		$("#dai").show();
		$("#witcher").show();
		$("#lou").show();
	});

});