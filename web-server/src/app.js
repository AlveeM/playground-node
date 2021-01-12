const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();

const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

// define paths for express config
const publicDirPath = path.join(__dirname, "../public/");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// setup handlebars engine and configure
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// setup static dir to serve
app.use(express.static(publicDirPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "John",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    name: "John",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    name: "John",
  });
});

app.get("/weather", (req, res) => {
  const address = req.query.address;
  if (!address) {
    return res.send({
      error: "Must provide an address",
    });
  }

  geocode(address, (err, { latitude, longitude, location } = {}) => {
    if (err) {
      return res.send({
        error: err,
      });
    }

    forecast(latitude, longitude, (err, forecastData) => {
      if (err) {
        return res.send({
          error: err,
        });
      }

      res.send({
        forecast: forecastData,
        location,
        address,
      });
    });
  });
});

// app.get("/products", (req, res) => {
//   if (!req.query.search) {
//     return res.send({
//       error: "Must provide a search term",
//     });
//   }

//   console.log(req.query);
//   res.send({
//     products: [],
//   });
// });

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "John",
    errorMessage: "Help article not found",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "John",
    errorMessage: "Page not found",
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
