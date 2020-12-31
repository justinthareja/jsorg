let Header = (function () {
       
    function init() {
        let $headerLinks = document.querySelectorAll("[rel=js-header] > [rel=js-controls] > a");
        let $modal = document.querySelector("#modal");
        
        function openModal(e) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            
            Ajax.get(e.target.href, function(err, response) {
                $modal.innerHTML = response;
                $modal.style.display = "block";
            });
        }

        $headerLinks.forEach(function($el) {
            $el.addEventListener("click", openModal);
        });
    }

    return {
        init: init,
    }
})();