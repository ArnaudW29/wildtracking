"use strict";

document.addEventListener("DOMContentLoaded", init)
function init() {
    fetch("/api/input")
        .then(res => res.json())
}
const mapd = L.map('mapid').setView([50.673 , 4.6], 13);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {}).addTo(mapd)
L.marker([51.5, -0.09]).addTo(mapd);
