// Map and Tiles
// L means leaflet
// setView([latitude, longitude]zoom level)
const mymap = L.map('issMap').setView([0, 0], 1);
// map is created but no tiles, attribution is required
const attribution = 
'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const tileURL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileURL, { attribution });
tiles.addTo(mymap); 


// Marker and Marker Icon
const issIcon = L.icon({
    iconUrl: 'iss-icon.png',
    iconSize: [50, 32],
    iconAnchoor: [25, 16]
});
const marker = L.marker([0, 0], { icon: issIcon }).addTo(mymap);

const api_url_iss = 'https://api.wheretheiss.at/v1/satellites/25544';

// async - makes a function return Promise
// await - makes a function wait for a Promise
async function getAPI_DATA_ISS() {
    const response = await fetch(api_url_iss);
    const data = await response.json();
    
    // Destructuring in JS (Separating lat and lon to individual Variable)
    const {latitude, longitude} = data;
    // console.log(data);
    // console.log(latitude);
    // console.log(longitude);

    // L.marker([latitude, longitude]).addTo(mymap);
    marker.setLatLng([latitude, longitude]);
    
    document.querySelector('#lat').textContent = latitude;
    document.querySelector('#lon').textContent = longitude;
    
    // for (const x in data) {
        //     console.log(`${x}: ${data[x]}`)
        // }
        
        // JS can't return multiple values, but can return an array thru object type
        return { longitude, latitude };
    }
    
    
    getAPI_DATA_ISS().then(x => {
        console.log(x.latitude);
    })
    
    
// Reloading the page every 5 sec
setInterval(getAPI_DATA_ISS, 1000);