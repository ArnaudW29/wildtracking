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

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {}).addTo(mapd)
    L.marker([51.5, -0.09]).addTo(mapd)
}
