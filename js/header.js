(function() {
    // The DOM will be available here
    // https://stackoverflow.com/questions/9899372/pure-javascript-equivalent-of-jquerys-ready-how-to-call-a-function-when-t
    function handleHeaderLinkClick(e) {
        e.preventDefault();
        
        Ajax.get(this.href, function (err, response) {
            if (err) {
                // TODO: Learn how to properly handle errors
                return false;
            }
            
            let $modal = document.querySelector("#modal");
            
            $modal.innerHTML = response;
            $modal.style.display = "block";
        });
    }
    
    let $headerLinks = document.querySelectorAll("header a");

    $headerLinks.forEach(function($el) {
        $el.onclick = handleHeaderLinkClick;
    });
})();