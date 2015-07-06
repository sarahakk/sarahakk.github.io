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

	render();
}