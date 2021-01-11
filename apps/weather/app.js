const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const address = process.argv[2];

if (!address) {
  console.log("Please enter an address");
} else {
  geocode(address, (err, data) => {
    if (err) return console.log(err);

    const { latitude, longitude, location } = data;
    forecast(latitude, longitude, (forecastErr, forecastData) => {
      if (forecastErr) return console.log(forecastErr);

      console.log(location);
      console.log(forecastData);
    });
  });
}
