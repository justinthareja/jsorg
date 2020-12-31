let Carousel = (function() {
	function scrollLeft(evt) {
		evt.preventDefault();
		evt.stopPropagation();
		evt.stopImmediatePropagation();

		if (position > 0) {
			position = Math.max(0, position - 250);
		}

		$items.css({ left: (-position) + "px" });
	}

	function scrollRight(evt) {
		evt.preventDefault();
		evt.stopPropagation();
		evt.stopImmediatePropagation();

		if (position < maxPosition) {
			position = Math.min(maxPosition, position + 250);
		}

		$items.css({ left: (-position) + "px" });
	}
	
	function showDetails(e) {
		let rel = e.target.attributes.rel.value;
		let itemId = (rel.match(/[0-9]/g) || [])[0];

		if (itemId) {
			Details.loadPerson(itemId);
		}
	}
	
	function init() {
		$left.addEventListener('click', scrollLeft);
		$right.addEventListener('click', scrollRight);
		$content.on('click', showDetails);
	}

	var $content = $("[rel=js-carousel] > [rel=js-content]");
	var $items = $content.children("[rel=js-items]");
	let $left = document.querySelector("#carousel > .controls > .left");
	let $right = document.querySelector("#carousel > .controls > .right");

	var contentWidth = $content.width();
	var itemsWidth = $items.width();
	var position = 0;
	var maxPosition = (itemsWidth - contentWidth);

	return {
		init: init
	}
})();

$(document).ready(function(){
	Carousel.init();		
});
