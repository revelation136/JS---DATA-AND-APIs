const api_url_iss = 'https://api.wheretheiss.at/v1/satellites/25544';

// async - makes a function return Promise
// await - makes a function wait for a Promise
async function getAPI_DATA_ISS() {
    const response = await fetch(api_url_iss);
    const data = await response.json();

    // Deconstructing in JS (Separating lat and lon to individual Variable)
    const {latitude, longitude} = data;
    console.log(data);
    console.log(latitude);
    console.log(longitude);

    document.querySelector('#lat').textContent = latitude;
    document.querySelector('#lon').textContent = longitude;

    for (const x in data) {
        console.log(`${x}: ${data[x]}`)
    }
}

getAPI_DATA_ISS();

// Reloading the page every 5 sec
// setInterval('window.location.reload()', 5000);