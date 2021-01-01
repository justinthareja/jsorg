let Header = (function () {
    let $headerLinks;

    function toggleModal(e) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        
        // TODO: Stop extra ajax call when closing modal
        // TODO: Only toggle the modal if the login modal is open and you click login again,
        // currently this will close if the register modal is open and you click login
        Ajax.get(e.target.href, function(err, response) {
            Modal.setContent(response);
            Modal.toggle();
        });
    }

    function init() {
        $headerLinks = document.querySelectorAll("[rel=js-header] > [rel=js-controls] > a");

        $headerLinks.forEach(function($el) {
            $el.addEventListener("click", toggleModal);
        });
    }
    
    EVT.on("init", init);
    
    return {
        init: init,
    }
})();