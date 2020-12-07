// REQUIRED MODULES
const request = require('request')

// FORECAST FUNCTION
const forecast = (lattitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?${process.env.weatherKEY}&query=${lattitude},${longitude}&units=m`

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to weather services!', undefined)
    } else if (response.body.error) {
      callback('Unable to find location', undefined) 
    } else {
      callback(undefined, 
        `Conditions: ${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees, and feels like ${response.body.current.feelslike} degrees out.`
      )
    }
  })
}


// MODULES EXPORTED
module.exports = forecast;