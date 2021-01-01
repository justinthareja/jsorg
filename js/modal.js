let Modal = (function() {
    let $modal, $closeButton, $modalContent;

    function init() {
        $modal = document.querySelector("#modal");
        $modalContent = document.querySelector("#modal > .modal-content");
        $closeButton = document.querySelector("#modal > .close-button");
        
        $closeButton.addEventListener('click', toggle);

    }
    
    function toggle() {
        if (isOpen()) {
            $modal.style.display = "none"
        } else {
            $modal.style.display = "block";
        }
    }
    
    function setContent(html) {
        $modalContent.innerHTML = html;
    }
    
    function isOpen() {
        return $modal.style.display === "block";
    }
    
    EVT.on("init", init);
    
    return {
        init,
        toggle,
        setContent,
        isOpen
    }
})();
