const express = require('express');
const path = require('path')
const app = express();
const PORT = process.env.PORT || 8080;
const mongoose = require("mongoose");
const routes = require("./routes");


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("../graph/build"));
}
// Add routes, both API and view
app.use(routes);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("../graph/build"));
}

// Connect to the Mongo DB
let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/inventory";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true  }, (error) => {
	if (!error) {
		console.log("hello 🌎  ==>");
		app.listen(PORT, function() {
			console.log('listening on port ' + PORT + ' db: ' + MONGODB_URI);
		});
	}
	else {
		(console.log('mongoose error: ' + error));
	};
});