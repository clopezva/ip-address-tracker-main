// Buena suerte!

const inputField = document.querySelector('#ip-input')
const ipField = document.querySelector("#ip-info")
const locationField = document.querySelector("#location-info")
const timeZoneField = document.querySelector("#timezone-info")
const ispField = document.querySelector("#isp-info")
const form = document.querySelector("form")
const mapField = document.querySelector("#map")
const inputBtn = document.querySelector("button")


form.addEventListener('submit', (event) =>{
    event.preventDefault()
    inputBtn.addEventListener('click', () => {
        let ip = inputField.value
    console.log("Me has dado click: ", ip)
    getLocationfromApi(ip);
})
})
// Lograr que el submit nos arroje el valor al clicar el boton



async function getLocationfromApi(location){

    const url = `https://ipapi.co/${location}/json/`
    console.log("URL: ", url)

    fetch(url)
    .then(response => response.json())
    .then(data => {
        ipField.textContent = data.ip
        console.log(ipField)
        locationField.textContent = `${data.city}, ${data.region}, ${data.country}`
        console.log(locationField)
        const timeZone = data.utc_offset
        timeZoneField.textContent = `UTC: ${timeZone}`
        console.log(timeZoneField)
        ispField.textContent = data.org
        console.log(ispField)
        const latitude = data.latitude
        const longitude = data.longitude
        console.log(latitude, longitude)
        var map = L.map('map').setView([latitude, longitude], 13);
        console.log(map)
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
        var marker = L.marker([latitude, longitude]).addTo(map);
        var circle = L.circle([latitude, longitude], {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 500
        }).addTo(map);
        var polygon = L.polygon([
            [latitude, longitude],
            [latitude, longitude],
            [latitude, longitude] 
        ]).addTo(map);
        marker.bindPopup("ip").openPopup(); 
        circle.bindPopup("I am a circle.");
        polygon.bindPopup("I am a polygon.");
        var popup = L.popup()
        .setLatLng([latitude, longitude])
        .setContent(ip)
        .openOn(map);
        
        var popup = L.popup();

        function onMapClick(e) {
        popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
        }

        map.on('click', onMapClick);
        })

    }

// getLocationfromApi(location)

