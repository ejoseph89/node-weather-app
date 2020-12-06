//  REQUIRED MODULES
const request = require('request')
require('dotenv').config()

// Goal: Address -> Lat/Long -> Weather

// WEATHERSTACK 
const weatherURL = `http://api.weatherstack.com/current?${process.env.weatherKEY}&query=37.8267,-122.4233&units=f`;

request({ url: weatherURL, json: true }, (error, response) => {
  if (error) {
    console.log('Unable to connect to weather service!')
  } else if (response.body.error) {
    console.log('Unable to find location')
  } else {
    console.log(`Conditions: ${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees, and feels like ${response.body.current.feelslike} degrees out.`)
  }
})

// GEOCODING
const mapboxURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?${process.env.mapboxKEY}`;

request({ url: mapboxURL, json: true }, (error, response) => {
  if (error) {
    console.log('Unable to connect to location service!')
  } else if (response.body.features.length === 0) {
    console.log('Unable to find requested location')
  } else {
    const lattitude = response.body.features[0].geometry.coordinates[1];
    const longitude = response.body.features[0].geometry.coordinates[0];
    console.log(`Location: Los Angeles | Lat: ${lattitude}, Long: ${longitude}`)
  }
})