//  REQUIRED MODULES
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
require('dotenv').config()

// Goal: Address -> Lat/Long -> Weather
geocode('Ocho Rios', (error, data) => {
  console.log('Error: ', error)
  console.log('Data: ', data)

  
  forecast( data.lattitude, data.longitude, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
  })


})
