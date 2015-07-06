$(function() {
	$("#menu-panel").panel();
	$("#menu-panel [data-role='listview']").listview();
	$(".test").click(function() {
		var text = $(this).text();

		$("#menu-panel").on("panelclose", function() {
			switch (text) {
				case "About Me":
					text = "about";
					break;
				case "Photography":
					text = "photos";
					break;
			}

			$.mobile.changePage("#" + text.toLowerCase(), {transition: "none"});
		});

		$("#menu-panel").panel("close");
	});

	$(document).on( "pagecreate", function() {
		$("#menu-panel").panel();
		$("#menu-panel [data-role='listview']").listview();
	}).on("swiperight", function() {
		$("#menu-panel").panel("open");
	});
});

function submitted() {
	$("#thank-you").popup("open");
}