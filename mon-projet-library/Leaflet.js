var map = L.map('map').setView([43.621854, 1.41550], 13);

var marker = L.marker([43.621854, 1.41550]).addTo(map);
var marker1 = L.marker([44.897100, -0.561650]).addTo(map);
var marker2 = L.marker([47.651874, -2.761098]).addTo(map);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


marker.bindPopup("<b>Stade Toulousain</b><br>Champions toutes catégories");
marker1.bindPopup("<b>Union Bordeaux-Bègles</b><br>Les gros nuls!");
marker2.bindPopup("<b>RCVannes</b><br>Le sang de la veine!");

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);

var myIcon = L.icon({
    iconUrl: 'https://www.svgrepo.com/show/376566/map-marker-area-line.svg',
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
});

L.marker([50.505, 30.57], {icon: myIcon}).addTo(map);