// REQUIRED MODULES
const request = require('request');

// GEOCODE FUNCTION
const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?${process.env.mapboxKEY}`

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to location services!', undefined)
    } else if (response.body.features.length === 0){
      callback('Unable to find requested location. Try another search', undefined)
    } else {
      callback(undefined, {
         lattitude : response.body.features[0].geometry.coordinates[1],
         longitude : response.body.features[0].geometry.coordinates[0],
         location : response.body.features[0].place_name
      })
    }
  }) 
}

// MODULES EXPORTED
module.exports = geocode;