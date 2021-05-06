const request = require('postman-request')

const forecast = (latitude, longitude, location, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=e2fbbf6c438e921bfeb16bef289da608&query=' + latitude+ '+' + longitude
    request({url, json: true}, (error, {body}) => {
        const { error:e, current:currentWeather } = body
        if(error){
            callback('Unable to connect to weather service!', undefined)
        } else if(e){
            callback(e.info, undefined)
        }else{
            temperature = currentWeather.temperature
            weatherIcon = currentWeather.weather_icons[0]
            weatherDescription = currentWeather.weather_descriptions[0]
            callback(undefined, { text: 'Currently it is ' + temperature + ' degrees' + ' in ' + location + '.',
                                weatherIcon,
                                weatherDescription
                            })
        }
    })
}


module.exports = forecast