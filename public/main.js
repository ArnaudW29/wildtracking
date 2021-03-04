/*let mymap;
let dataReçu={"LrrSNR":"0.0","altitude":"119.0","Lrrid":"FF01075F","SpFact":"7","SubBand":"G0","FPort":"1","Channel":"LC1","latitude":"50.666077","FCntUp":"0","Time":"1614853087347","DevEUI":"1C8779C00000024B","LrrRSSI":"-111.0","DeviceAddress":"06100DBC","stream_id":"9","FCntDn":"1","time":"Fri Jan 02 04:16:44 UTC 1970","DevLrrCnt":"1","Tags":"['test']","DeviceName":"24B","longitude":"4.6121182"}
let temps;
let vraiTemps;
let popup;

function transform(temps) {
temps = temps/1000;
var date = new Date(temps*1000);
return date;
}
function addDatas(données){
	popup = L.popup();

	if (données[2].getMinutes()<10){
	vraiTemps= "<b> " + données[2].getDay() +"/"+ données[2].getMonth() +"</b><br>" +  données[2].getHours() + ":0" + données[2].getMinutes() 
	}
	else {
		vraiTemps= "<b> " + données[2].getDay() +"/"+ données[2].getMonth() +" </b><br>" +  données[2].getHours() + ":" + données[2].getMinutes()  // MODIF ICI
	}
	document.getElementById("corps").innerHTML += "<tr><td>" + vraiTemps + "</td><td>"+ données[0] + " </td><td>"+ données[1] + "</td></tr>";
	L.marker([données[0],données[1]]).addTo(mymap).bindPopup(vraiTemps);
	console.log(données[0],données[1],données[2])
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
   var mymap = L.map('map').setView([50.668081, 4.6118324], 15);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(mymap)
};*/
let mymap;
let dataReçu={"LrrSNR":"0.0","altitude":"119.0","Lrrid":"FF01075F","SpFact":"7","SubBand":"G0","FPort":"1","Channel":"LC1","latitude":"50.666077","FCntUp":"0","Time":"1614853087347","DevEUI":"1C8779C00000024B","LrrRSSI":"-111.0","DeviceAddress":"06100DBC","stream_id":"9","FCntDn":"1","time":"Fri Jan 02 04:16:44 UTC 1970","DevLrrCnt":"1","Tags":"['test']","DeviceName":"24B","longitude":"4.6121182"}
let dataReçu2={"LrrSNR":"0.0","altitude":"116.200005","Lrrid":"FF01075F","SpFact":"7","SubBand":"G0","FPort":"1","Channel":"LC6","latitude":"50.666","FCntUp":"2","Time":"1614845761353","DevEUI":"1C8779C00000024B","LrrRSSI":"-104.0","DeviceAddress":"06100DBC","stream_id":"9","FCntDn":"2","time":"Thu Jan 01 22:37:18 UTC 1970","DevLrrCnt":"1","Tags":"['test']","DeviceName":"24B","longitude":"4.612023"}
let temps;
let vraiTemps;
let popup;
let lat;
let lng;
let time;
let info;


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

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 20,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1
    }).addTo(mymap);
}




function addDatas(données){
	popup = L.popup();
	/*addHistorique();
	popup = L.popup();
	L.marker([50,4 ]).addTo(mapid).bindPopup(vraiTemps);*/

	if (données[2].getMinutes()<10){
	vraiTemps= "<b> " + données[2].getDay() +"/"+ données[2].getMonth() +"</b><br>" +  données[2].getHours() + ":0" + données[2].getMinutes() 
	}
	else {
		vraiTemps= "<b> " + données[2].getDay() +"/"+ données[2].getMonth() +" </b><br>" +  données[2].getHours() + ":" + données[2].getMinutes()  // MODIF ICI
	}
	document.getElementById("corps").innerHTML += "<tr><td>" + vraiTemps + "</td><td>"+ données[0] + " </td><td>"+ données[1] + "</td></tr>";
	L.marker([données[0],données[1]]).addTo(mymap).bindPopup(vraiTemps);
	console.log(données[0],données[1],données[2])
}





