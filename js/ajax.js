let Ajax = (function () {
    function get(url, callback) {
        httpRequest = new XMLHttpRequest();

        if(!httpRequest) {
            alert("Cannot create XMLHttpRequest instance");
            return false;
        }

        httpRequest.onreadystatechange = sendContents;
        httpRequest.open('GET', url);
        httpRequest.send();

        // TODO how do you handle errors?
        function sendContents() {
            if (httpRequest.readyState === XMLHttpRequest.DONE) {
                // Request finished, response is ready
                if (httpRequest.status === 200) {
                    // Perfect!
                    // Error first signature
                    callback(null, httpRequest.responseText);
                } else {
                    // There was a problem with the request.
                    // Example: 404 (Not Found)
                    // or 500 (Internal Server Error) response code.
                }
            } else {
                // Not ready yet.
            }
        }
    }

    return {
        get: get
    };

})();