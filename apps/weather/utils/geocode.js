const dotenv = require("dotenv");
dotenv.config();
const request = require("request");
const MAPBOX_API = process.env.MAPBOX_API;

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${MAPBOX_API}&limit=1`;

  request({ url, json: true }, (err, res) => {
    if (err) callback("Unable to connect");

    const data = res.body;
    if (data.message === "Not Found") {
      callback("Unable to find the location");
    }

    callback(undefined, {
      latitude: data.features[0].center[1],
      longitude: data.features[0].center[0],
      location: data.features[0].place_name,
    });
  });
};

module.exports = geocode;
