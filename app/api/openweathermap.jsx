var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=8cd0e004b716a59d2af3d42d835c8dc6&units=imperial';

//api key: 8cd0e004b716a59d2af3d42d835c8dc6


module.exports = {
  getTemp: function(location){
    var encoded_location = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encoded_location}`;
  
    return axios.get(requestUrl).then(function(res){
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function(err){ //res
        // throw new Error(res.data.message)
        throw new Error('Unable to fetch weather for that location.');
    });
  }
}