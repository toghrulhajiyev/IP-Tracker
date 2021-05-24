class LocMap {
    // Create Map
    createMap(lat, lng) {
        
        // map-wrapper and map
        const mapWrp = document.querySelector('#map');
        const map = document.querySelector('#mapid');

        // Create a new map element
        const newMap = document.createElement('div');
        newMap.setAttribute('id', 'mapid');

        // Remove old map
        mapWrp.removeChild(map);

        // Append new map to the wrapper
        mapWrp.append(newMap);

        // Leaflet Map
        let myMap = L.map('mapid').setView([`${lat}`,`${lng}`], 13);

        // Mapbox Streets tile layer
        L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${keys.mapApiKey}`, {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 20,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
        }).addTo(myMap);

        // Custom marker icon
        let markerIcon = L.icon({
            iconUrl: 'img/icon-location.svg',
            iconSize: [25, 33],
            iconAnchor: [9, 32],
        });

        // Leaflet marker
        let marker = L.marker([`${lat}`, `${lng}`], { icon: markerIcon }).addTo(myMap);
    }
}