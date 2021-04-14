const express = require('express');
const path = require('path')
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '.ß./graph/build')));

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