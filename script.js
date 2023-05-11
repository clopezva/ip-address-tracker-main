// Buena suerte!

const inputField = document.querySelector('#ip-input')
const ipField = document.querySelector("#ip-info")
const locationField = document.querySelector("#location-info")
const timeZoneField = document.querySelector("#timezone-info")
const ispField = document.querySelector("#isp-info")
const form = document.querySelector("form")

const inputBtn = document.querySelector("button")

form.addEventListener('submit', (event) =>{

    event.preventDefault()

})

inputField.addEventListener('submit', () => {
    const ip = inputField.value
    console.log(ip)
})

// async function getLocationfromApi(location){

//     const url = `https://ipapi.co/${location}/json/`
//     console.log("URL: ", url)

//     fetch(url)
//     .then(response => response.json())
//     .then(data => {
//         ipField.textContent = data.ip
//         console.log(ipField)
//         locationField.textContent = `${data.city},${data.region},${data.country}`
//         console.log(locationField)
//         timeZoneField.textContent = data.timezone
//         console.log(timeZoneField)
//         ispField.textContent = data.org
//         console.log(ispField)
        
//     })

// }

// getLocationfromApi(location)

