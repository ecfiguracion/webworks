var mymap = L.map('mapid').setView([13.2354, 123.7781], 16);           
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiZWNmaWd1cmFjaW9uIiwiYSI6ImNqNmNwZW5ybzF0cWwzM2w3YXh2enk2dXAifQ.HLzVBNEG5-czGJjBENEc-Q'
}).addTo(mymap);