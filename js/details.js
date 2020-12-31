let Details = (function() {

	let $items = document.querySelector("[rel=js-carousel] > [rel=js-content] > [rel=js-items]")
	let $details = document.querySelector("[rel=js-details]");
	let $content = document.querySelector("[rel=js-carousel] > [rel=js-content]");
	
	function showDetails(e) {
		let rel = e.target.attributes.rel.value;
		let itemId = (rel.match(/[0-9]/g) || [])[0];
		
		if (!itemId) {
			return;
		}

		Ajax.get(`/details/${itemId}.html`, function (err, response) {
			$details.innerHTML = response;
		});
	}

	function init() {
		$content.addEventListener('click', showDetails);
	}

	return {
		init: init
	};
})();

$(document).ready(function(){
	Details.init();
});
