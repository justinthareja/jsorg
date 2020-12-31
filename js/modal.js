let Modal = (function() {
    let $modal = document.querySelector("#modal");
    let $closeButton = document.querySelector("#modal > .close-button");
    let $modalContent = document.querySelector("#modal > .modal-content");

    function init() {
        $closeButton.addEventListener('click', toggle);
    }

    function toggle() {
        let display = $modal.style.display;

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

    return {
        init,
        toggle,
        setContent,
        isOpen
    }
})();
