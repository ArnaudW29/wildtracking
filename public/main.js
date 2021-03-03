"use strict";

document.addEventListener("DOMContentLoaded", init)

function init() {
    fetch("/api/input")
        .then(res => res.json())
        .then(showData)
}

function showData(arrayOfData) {
    var mapd = L.map('mapid').setView([50.668081, 4.6118324], 15);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(mapd)
  
    var obj = arrayOfData[arrayOfData.length - 1]
    L.marker([obj.lat, obj.long]).addTo(mymap)
    
}

