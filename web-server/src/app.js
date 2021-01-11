const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();

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
  res.send({
    forecast: "Rain",
    location: "NYC",
  });
});

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