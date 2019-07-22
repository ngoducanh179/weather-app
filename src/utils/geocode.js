const request = require('request')
const geocode = (address, callback) => {
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibmdvZHVjYW5oMTc5IiwiYSI6ImNqeTlqaThndzA0dDkzamtpNHV2dmZsengifQ.R1ru_0NT6mRJ7afxIc9kWw&limit=1'

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to location servies!', undefined)
    } else if (body.features.length === 0) {
      callback('Unable to find location. Try another search', undefined)
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        Location: body.features[0].place_name
      })
    }
  })
}
module.exports = geocode