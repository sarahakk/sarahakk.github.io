if (/Android|webOS|iPhone|iPad|iPod|Blackberry/i.test(navigator.userAgent)) {
	if (screen.width <= 900) {
		window.location.assign("./mobile");
	}
}
else {
	function render() {
		$("#header-img-div").height($("#header-img").height());
		$("#header-name").css({bottom: "40%", right: 0});

		$(window).resize(function() {
			$("#header-img-div").height($("#header-img").height());
			$("#header-name").css({bottom: "40%", right: 0});
		});
	}

	function setContactSize() {
		$("#contact-table, #contact-icon-set").height($("#contact-form").height());
	}

	// Preload images
	var images = new Array();

	for (var i = 1; i < 10; i++) {
		images[i] = new Image();
		images[i].src = "../resources/img" + i + ".jpg";
	}

	$(function() {
		$("#back-div").click(function(event) {
			event.preventDefault();
			var index = parseInt($("#current-div > img").prop("alt"));
			index = (index == 1) ? 9 : (index - 1);
			
			$("#current-div").html("<img src='../resources/img" + index + ".jpg' alt='" + index + "' />");
		});

		$("#forth-div").click(function(event) {
			event.preventDefault();
			var index = parseInt($("#current-div > img").prop("alt"));
			index = (index == 9) ? 1 : (index + 1);

			$("#current-div").html("<img src='../resources/img" + index + ".jpg' alt='" + index + "' />");
		});
	});
}