"use strict";

document.addEventListener("DOMContentLoaded", init)

function init() {
    fetch("/api/input")
        .then(res => res.json())
        .then(showData)
}

function showData(arrayOfData) {

    const mapd = L.map('mapid').setView([50.48, 4.6], 10)
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {}).addTo(mapd)
    L.polyline(arrayOfData.map(obj => [obj.lat, obj.long])).addTo(mapd)
  
    const obj = arrayOfData[arrayOfData.length - 1]
    L.marker([obj.lat, obj.long]).addTo(mymap)
    
}

