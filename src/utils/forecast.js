const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url = 'https://api.darksky.net/forecast/e7b9a02aafc67f486eb7319bd1059a89/' + encodeURIComponent(latitude + ',' + longitude) + ''

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to the weather sevice', undefined)
    } else if (body.error) {
      callback(body.error, undefined)
    } else {
      callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
    }
  })
}












module.exports = forecast