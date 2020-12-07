//  REQUIRED MODULES
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
require('dotenv').config()

// Accepting location from the command line
const place = process.argv[2];

if (!place) {

  console.log('Please provide a valid name of the place')
} else {

  geocode(place, (error, data) => {
    if (error) {
      return console.log(error)
    }
    
    forecast( data.lattitude, data.longitude, (error, forecastData) => {
      if (error) {
        return console.log(error)
      }
      
      console.log(data.location)
      console.log(forecastData)
      
    })
  })
}