// Dependencies
const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
// Creating an instance of handlebars
const hbs = exphbs.create({});

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// Set Handlebars as the default template engine.
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.static(path.join(__dirname, "public")));
app.use(require("./routes/home-routes"));

// Allow Handlebars to use images -- NOT SURE IF THIS WILL WORK
app.use(express.static("./public/images"));

// Starts the server to begin listening
app.listen(PORT, () => {
  console.log("Server listening on: http://localhost:" + PORT);
});
