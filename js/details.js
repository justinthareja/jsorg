$(document).ready(function(){

	// var $items = $("[rel=js-carousel] > [rel=js-content] > [rel=js-items]");
	// var $content = $("[rel=js-details]");

	let $items = document.querySelector("[rel=js-carousel] > [rel=js-content] > [rel=js-items]")
	let $details = document.querySelector("[rel=js-details]");
	let $content = document.querySelector("[rel=js-carousel] > [rel=js-content]");

	function showDetails(e) {
		let rel = e.target.attributes.rel.value;
		let itemId = rel.match(/[0-9]/g)[0];

		Ajax.get(`/details/${itemId}.html`, function(err, response) {
			$details.innerHTML = response;
		});
	}

	$content.addEventListener('click', showDetails);

	// on click of a carousel item, do an Ajax request for
	// the "details/2.html" (or whatever) file for the person
	// clicked, and load those contents into the `$content` div.

	// hint: you will probably want to use "event propagation"
	// (aka "event delegation"), by attaching a single event
	// handler the `$content` element rather than individual
	// event handlers to each item in the carousel.

});
