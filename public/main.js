"use strict";

document.addEventListener("DOMContentLoaded", init)
function init() {
    fetch("/api/input")
        .then(res => res.json())
var mymap = L.map('mapid').setView([50.673 , 4.6], 13);
}
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
	tileSize: 512,
	zoomOffset: -1
}).addTo(mymap);
L.marker([51.5, -0.09]).addTo(mymap);
