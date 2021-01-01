let Details = (function() {
	let $details;
	let $randomButton;

	function init() {
		$details = document.querySelector("[rel=js-details]");

		EVT.on("person-selected", loadPerson);
	}
	
	function loadPerson(id) {
		Ajax.get(`/details/${id}.html`, function (err, response) {
			$details.innerHTML = response;
			
			if (id == 1) {
				$randomButton = document.querySelector("[rel=js-random]");
				$randomButton.addEventListener('click', function(e) {
					let ids = [0, 1, 3, 4, 5];
					let i = getRandomInt(0, ids.length);
					EVT.emit("person-selected", ids[i]);
				})
			}
		});
	}
	
	// Max is exclusive and min is inclusive
	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min) + min);
	}
	
	EVT.on("init", init);

	return {
		init,
	};
})();