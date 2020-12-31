let Details = (function() {
	let $details = document.querySelector("[rel=js-details]");

	function init() {
		// ??
	}

	function loadPerson(id) {
		Ajax.get(`/details/${id}.html`, function (err, response) {
			$details.innerHTML = response;
		});
	}

	return {
		init,
		loadPerson
	};
})();

$(document).ready(function(){
	Details.init();
});
