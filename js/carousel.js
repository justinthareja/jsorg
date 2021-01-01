let Carousel = (function() {
	let $content, $items, $left, $right;
	let contentWidth, itemsWidth, position, maxPosition;
	
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
	
	function handlePersonClicked(e) {
		// Click handler is delegated to parent container,
		// so make sure the user clicked on a person before handling
		if (!e.target.matches("[rel^=js-item-]")) {
			return;
		}
		
		let rel = e.target.getAttribute("rel");
		let id = (rel.match(/[0-9]/g) || [])[0];

		EVT.emit("person-selected", id);
	}
	
	function init() {
		$content = $("[rel=js-carousel] > [rel=js-content]");
		$items = $content.children("[rel=js-items]");
		$left = document.querySelector("#carousel > .controls > .left");
		$right = document.querySelector("#carousel > .controls > .right");
	
		contentWidth = $content.width();
		itemsWidth = $items.width();
		position = 0;
		maxPosition = (itemsWidth - contentWidth);
		
		$left.addEventListener('click', scrollLeft);
		$right.addEventListener('click', scrollRight);
		$content.on('click', handlePersonClicked);

	}
	
	EVT.on("init", init);
	
	return {
		init: init
	}
})();