//create map variable
var map = L.map('mapWindow').setView([41.003739,-73.972321], 9);

// L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);

//use carto db positron tiles
L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
}).addTo(map);

//Test popup
// L.marker([41, -73.8]).addTo(map)
//     .bindPopup('Here is my marker<br> In the NYC Area')

  // add NY data
  L.geoJson(nydata, {
  	pointToLayer: function (feature, latlng) {
	      return L.circleMarker(latlng, {
	        color: 'goldenrod', //style the circlemarker
	        fillColor: 'skyblue',
	        fillOpacity: .9,
	        weight: 2,
	        radius: 5,
	      });
	    }, 
    onEachFeature: function (feature, layer) {
	      	layer.on('click', function() {
	        		$('#toprow h4').text(feature.properties.ST_CASE) //add features to sidepanel: ID#, vehicles, fatalities, date
	        		$('#secrow h4').text(feature.properties.VE_TOTAL)
	        		$('#thirdrow h4').text(feature.properties.FATALS)
	        		$('#fourrow h4').text(feature.properties.MONTH + "/" + feature.properties.DAY + "/2015")
	      		})
	    	}   
	}).addTo(map);   
//add NJ data
	L.geoJson(njdata, {
	  	pointToLayer: function (feature, latlng) {
		      return L.circleMarker(latlng, {
		        color: 'steelblue', //style the circlemarker
		        fillColor: 'gold',
		        fillOpacity: .9,
		        weight: 2,
		        radius: 5,
		      });
		    }, 
		onEachFeature: function (feature, layer) {
	      	layer.on('click', function() {
	        		$('#toprow h4').text(feature.properties.ST_CASE) //add features to sidepanel: ID#, vehicles, fatalities, date
	        		$('#secrow h4').text(feature.properties.VE_TOTAL)
	        		$('#thirdrow h4').text(feature.properties.FATALS)
	        		$('#fourrow h4').text(feature.properties.MONTH + "/" + feature.properties.DAY + "/2015")
	      		})
	    	}   
		}).addTo(map);


    