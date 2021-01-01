let EVT = new EventEmitter2();

window.addEventListener("DOMContentLoaded", function(event) {
    EVT.emit("init");
});