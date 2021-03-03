"use strict";

document.addEventListener("DOMContentLoaded", init)

function init() {
    fetch("/input")
        .then(res => res.json())
        .then(showData)
}

function showData(arrayOfData) {
    var mapd = L.map('mapid').setView([50.668081, 4.6118324], 15);
	mapd.doubleClickZoom.disable();
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(mapd)
}

function addHistorique(){
	let temps= new Date();
	if (temps.getMinutes()<10){
		vraiTemps= temps.getDay() +"/"+ temps.getMonth() +" " +  temps.getHours() + ":0" + temps.getMinutes() + "   "  ;// coordonées
	}
	else {
		vraiTemps= temps.getDay() +"/"+ temps.getMonth() +" " +  temps.getHours() + ":" + temps.getMinutes() + "   "  ;// coordonées
	}
	document.getElementById("corps").innerHTML += "<tr><td>" + vraiTemps + "</td><td> test </td><td> test </td></tr>" ;
}
onmousemove = function(e){console.log("mouse location:", e.clientX, e.clientY)}
	
function addMarker(){
	addHistorique();
	popup = L.popup();
	L.marker([e.clientX,e.clientY ]).bindPopup(temps).addTo(mapd).bindPopup(temps.getHours() + ":" + temps.getMinutes());
}
