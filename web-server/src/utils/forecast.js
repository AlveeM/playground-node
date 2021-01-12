const dotenv = require("dotenv");
dotenv.config();
const request = require("request");
const WEATHER_STACK_API = process.env.WEATHER_STACK_API;

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=${WEATHER_STACK_API}&query=${latitude},${longitude}&units=f`;

  request({ url, json: true }, (err, res) => {
    if (err) return callback("Unable to connect");

    const data = res.body;
    if (data.success === false) return callback("Unable to find location");

    const { temperature, feelslike, weather_descriptions } = data.current;
    const forecastText = `${weather_descriptions[0]}. It is currently ${temperature} degrees out. It feels like ${feelslike} degrees out.`;

    callback(undefined, forecastText);
  });
};

module.exports = forecast;
