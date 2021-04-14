const express = require('express');
const path = require('path')
const app = express();
const PORT = process.env.PORT || 8080;
const mongoose = require("mongoose");
const routes = require("./routes").default;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("../graph/build"));
}
// Add routes, both API and view
app.use(routes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "../graph/build/index.html"));
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("../graph/build"));
}

app.listen(PORT, () => {
    console.log(`${PORT}`);
  });