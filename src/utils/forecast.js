const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/2db920dd2acf066b4584e1cf68ef4b8f/' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            console.log(body.daily)
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + 
            '% chance of rain. \n Highest temperature for the day is going to be '+ body.daily.data[0].temperatureHigh+' and Lowest temprature is going to hit '+ body.daily.data[0].temperatureLow+'.')
        }
    })
}

module.exports = forecast