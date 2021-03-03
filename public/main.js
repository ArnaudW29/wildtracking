"use strict";

document.addEventListener("DOMContentLoaded", init)
function init() {
    fetch("/api/input")
        .then(res => res.json())
        .then(load)

}
function load(arrayOfData) {
    const dataHtml = document.querySelector("#data table tbody")

    // TODO: make a table of data
    
    let tableHtml = ""
    for (const obj of arrayOfData)
        tableHtml += `
        <tr>
            <th>${obj.lat}</th>
            <th>${obj.long}</th>
            <th>${obj.alt}</th>
        </tr>
        `

    dataHtml.innerHTML += tableHtml
    const mapd = L.map('mapid').setView([50.673 , 4.6], 13);

	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {}).addTo(mapd);
    L.polyline(arrayOfData.map(obj => [obj.lat, obj.long])).addTo(mapd)

    L.marker([51.5, -0.09]).addTo(mapd)
}
