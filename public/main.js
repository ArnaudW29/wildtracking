"use strict";

let mymap;

var coo_demo = [
    [50.665789231460536, 4.611847851845287],
    [50.66518399236119, 4.612373564792285],
    [50.664850767504554, 4.612738345204488],
    [50.66429992122932, 4.612609599176651],
    [50.664510739702926, 4.611880038352247],
    [50.664429132664196, 4.6114186984191665],
    [50.66452604100696, 4.6112899523913295],
    [50.66479466308698, 4.611244354839805],
    [50.664917072639035, 4.611348960987422],
    [50.665432209340075, 4.611373100867642],
    [50.66573019634217, 4.611754414457751]
];



let dataReçu={"LrrSNR":"0.0","altitude":"119.0","Lrrid":"FF01075F","SpFact":"7","SubBand":"G0","FPort":"1","Channel":"LC1","latitude":"50.666077","FCntUp":"0","Time":"1614853087347","DevEUI":"1C8779C00000024B","LrrRSSI":"-111.0","DeviceAddress":"06100DBC","stream_id":"9","FCntDn":"1","time":"Fri Jan 02 04:16:44 UTC 1970","DevLrrCnt":"1","Tags":"['test']","DeviceName":"24B","longitude":"4.6121182"}
let temps;
let vraiTemps;
let popup;

function transform(temps) {
temps = temps/1000;
var date = new Date(temps*1000);
return date;
}
function testDatas(datas){
	if ("latitude" in datas && "longitude" in datas){
		lat= Number(datas.latitude)
		lng= Number(datas.longitude)
		time=transform(datas.Time)
		info= [lat,lng,time]
		if (lat != 0 && lng !=0){
			addDatas(info)
		}
	}
}

function draw_map() {
    mymap = L.map('map').setView([50.66595108289637, 4.612268456094151], 17);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(mapd)
    }).addTo(mymap);
}

/*function addHistorique(){

	if (temps.getMinutes()<10){
		vraiTemps= temps.getDay() +"/"+ temps.getMonth() +" " +  temps.getHours() + ":0" + temps.getMinutes() + "   "  ;// coordonées
	}
	else {
		vraiTemps= temps.getDay() +"/"+ temps.getMonth() +" " +  temps.getHours() + ":" + temps.getMinutes() + "   "  ;// coordonées
	}
	document.getElementById("corps").innerHTML += "<tr><td>" + vraiTemps + "</td><td> test </td><td> test </td></tr>" ;
}
	
function addMarker(){
	addHistorique();
	popup = L.popup();
	L.marker([50,4 ]).addTo(mymap).bindPopup(temps.getHours() + ":" + temps.getMinutes());
}*/


function addDatas(données){
	popup = L.popup();
	debugger
	/*addHistorique();
	popup = L.popup();
	L.marker([50,4 ]).addTo(mapid).bindPopup(vraiTemps);*/

	if (données[2].getMinutes()<10){
	vraiTemps= données[2].getDay() +"/"+ données[2].getMonth() +" " +  données[2].getHours() + ":0" + données[2].getMinutes() 
	}
	else {
		vraiTemps= données[2].getDay() +"/"+ données[2].getMonth() +" " +  données[2].getHours() + ":" + données[2].getMinutes() 
	}
	document.getElementById("corps").innerHTML += "<tr><td>" + vraiTemps + "</td><td>"+ données[0] + " </td><td>"+ données[1] + "</td></tr>";
	L.marker([données[1],données[0]]).addTo(mymap).bindPopup(vraiTemps);
}

