/**
 * 
 */

$(document)
		.ready(
				function() {
					$("#b1").click(function() {
						$("#b2").text($(".dn1").text());
					});
					$("#b2")
							.click(
									function() {
										$("#display")
												.html(
														"<img alt = '냠냠냠' src = '../../images/borderlands2.jpg' border = '0'/>")
									});
				});