let mymap;
let dataReçu={"LrrSNR":"0.0","altitude":"119.0","Lrrid":"FF01075F","SpFact":"7","SubBand":"G0","FPort":"1","Channel":"LC1","latitude":"50.666077","FCntUp":"0","Time":"1614853087347","DevEUI":"1C8779C00000024B","LrrRSSI":"-111.0","DeviceAddress":"06100DBC","stream_id":"9","FCntDn":"1","time":"Fri Jan 02 04:16:44 UTC 1970","DevLrrCnt":"1","Tags":"[\"test\"]","DeviceName":"24B","longitude":"4.6121182"}
let dataReçu2={"LrrSNR":"0.0","altitude":"116.200005","Lrrid":"FF01075F","SpFact":"7","SubBand":"G0","FPort":"1","Channel":"LC6","latitude":"50.666","FCntUp":"2","Time":"1614845761353","DevEUI":"1C8779C00000024B","LrrRSSI":"-104.0","DeviceAddress":"06100DBC","stream_id":"9","FCntDn":"2","time":"Thu Jan 01 22:37:18 UTC 1970","DevLrrCnt":"1","Tags":"[\"test\"]","DeviceName":"24B","longitude":"4.612023"}
let dataReçu3={"LrrSNR":"-2.0","altitude":"0.0","Lrrid":"FF01075F","SpFact":"7","SubBand":"G0","FPort":"1","Channel":"LC3","latitude":"0.0","FCntUp":"1","Time":"1614864838850","DevEUI":"1C8779C00000024B","LrrRSSI":"-112.0","DeviceAddress":"06100DBC","stream_id":"9","FCntDn":"2","time":"Fri Jan 02 13:02:28 UTC 1970","DevLrrCnt":"1","Tags":"[\"test\"]","DeviceName":"24B","longitude":"0.0"}
let dataReçu4={
    "LrrSNR": "0.0",
    "altitude": "139.0",
    "Lrrid": "FF01075F",
    "SpFact": "7",
    "SubBand": "G0",
    "FPort": "1",
    "Channel": "LC1",
    "latitude": "50.666096",
    "FCntUp": "0",
    "Time": "1614855692432",
    "DevEUI": "1C8779C00000024B",
    "LrrRSSI": "-111.0",
    "DeviceAddress": "06100DBC",
    "stream_id": "9",
    "FCntDn": "2",
    "time": "Fri Jan 02 05:17:06 UTC 1970",
    "DevLrrCnt": "1",
    "Tags": "[\"test\"]",
    "DeviceName": "24B",
"longitude": "4.6222"
}
let dataReçu5={
    "LrrSNR": "1.0",
    "altitude": "139.0",
    "Lrrid": "FF01075F",
    "SpFact": "7",
    "SubBand": "G0",
    "FPort": "1",
    "Channel": "LC3",
    "latitude": "50.666096",
    "FCntUp": "0",
    "Time": "1614854998231",
    "DevEUI": "1C8779C00000024B",
    "LrrRSSI": "-111.0",
    "DeviceAddress": "06100DBC",
    "stream_id": "9",
    "FCntDn": "1",
    "time": "Fri Jan 02 05:02:25 UTC 1970",
    "DevLrrCnt": "1",
    "Tags": "[\"test\"]",
    "DeviceName": "24B",
    "longitude": "4.61503"
}
let dataReçu6={
    "LrrSNR": "0.0",
    "altitude": "139.0",
    "Lrrid": "FF01075F",
    "SpFact": "7",
    "SubBand": "G0",
    "FPort": "1",
    "Channel": "LC2",
    "latitude": "50.666096",
    "FCntUp": "0",
    "Time": "1614854745415",
    "DevEUI": "1C8779C00000024B",
    "LrrRSSI": "-111.0",
    "DeviceAddress": "06100DBC",
    "stream_id": "9",
    "FCntDn": "1",
    "time": "Fri Jan 02 04:57:00 UTC 1970",
    "DevLrrCnt": "1",
    "Tags": "[\"test\"]",
    "DeviceName": "24B",
    "longitude": "4.61406"
}
let dataReçu7={
    "LrrSNR": "4.0",
    "altitude": "139.0",
    "Lrrid": "FF01075F",
    "SpFact": "8",
    "SubBand": "G0",
    "FPort": "1",
    "Channel": "LC5",
    "latitude": "50.666096",
    "FCntUp": "2",
    "Time": "1614854921301",
    "DevEUI": "1C8779C00000024B",
    "LrrRSSI": "-109.0",
    "DeviceAddress": "06100DBC",
    "stream_id": "9",
    "FCntDn": "3",
    "time": "Fri Jan 02 05:02:25 UTC 1970",
    "DevLrrCnt": "1",
    "Tags": "[\"test\"]",
    "DeviceName": "24B",
    "longitude": "4.70"
}
let dataReçu8={
    "LrrSNR": "9.0",
    "altitude": "119.0",
    "Lrrid": "FF01075F",
    "SpFact": "7",
    "SubBand": "G0",
    "FPort": "1",
    "Channel": "LC7",
    "latitude": "50.666077",
    "FCntUp": "2",
    "Time": "1614852970690",
    "DevEUI": "1C8779C00000024B",
    "LrrRSSI": "-104.0",
    "DeviceAddress": "06100DBC",
    "stream_id": "9",
    "FCntDn": "3",
    "time": "Fri Jan 02 04:13:29 UTC 1970",
    "DevLrrCnt": "3",
    "Tags": "[\"test\"]",
    "DeviceName": "24B",
    "longitude": "4.6521190"
}
let dataReçu9={
    "LrrSNR": "10.0",
    "altitude": "119.0",
    "Lrrid": "FF01075F",
    "SpFact": "7",
    "SubBand": "G0",
    "FPort": "1",
    "Channel": "LC3",
    "latitude": "50.666077",
    "FCntUp": "0",
    "Time": "1614852944418",
    "DevEUI": "1C8779C00000024B",
    "LrrRSSI": "-103.0",
    "DeviceAddress": "06100DBC",
    "stream_id": "9",
    "FCntDn": "1",
    "time": "Fri Jan 02 04:09:18 UTC 1970",
    "DevLrrCnt": "1",
    "Tags": "[\"test\"]",
    "DeviceName": "24B",
    "longitude": "4.6121182"
}
let dataReçu10={
    "LrrSNR": "9.0",
    "altitude": "119.0",
    "Lrrid": "FF01075F",
    "SpFact": "10",
    "SubBand": "G0",
    "FPort": "1",
    "Channel": "LC4",
    "latitude": "50.666077",
    "FCntUp": "2",
    "Time": "1614852838909",
    "DevEUI": "1C8779C00000024B",
    "LrrRSSI": "-105.0",
    "DeviceAddress": "06100DBC",
    "stream_id": "9",
    "FCntDn": "3",
    "time": "Fri Jan 02 04:08:51 UTC 1970",
    "DevLrrCnt": "6",
    "Tags": "[\"test\"]",
    "DeviceName": "24B",
    "longitude": "4.6121175"
}
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
	if (datas.latitude && datas.longitude){
		lat= Number(datas.latitude)
		lng= Number(datas.longitude)
		time=transform(datas.Time)
		info= [lat,lng,time]
		if (lat != 0 && lng !=0){
			addDatas(info)	
		}
        	else {
            		alert("Coordonnées éronnées")
        	}	
	}
	else {
		alert("Coordonnées éronnées")
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





