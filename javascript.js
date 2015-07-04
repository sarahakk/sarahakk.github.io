if (/Android|webOS|iPhone|iPad|iPod|Blackberry/i.test(navigator.userAgent)) {
	if (screen.width <= 900) {
		window.location.assign("./mobile/indexm.html");
	}
}