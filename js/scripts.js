$(function() {
	if ($(".embed-alt-text").length) {
		$(".embed-alt-text").hide()
		setTimeout(function() {
			$(".embed-alt-text").fadeIn(1000)
		}, 2000)
	}
})
