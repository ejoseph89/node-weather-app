const request = require('request');
require('dotenv').config();

/**
 * &key=value | eg: &units=f
 */
const URL = process.env.URL;

request({ url: URL, json: true }, (error, response) => {

  console.log(`Conditions: ${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees, and feels like ${response.body.current.feelslike} degrees out.`)
})