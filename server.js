const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();

var port = process.env.API_PORT || 8080;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
   res.sendFile(path.join(__dirname, 'build', 'index.html'));
 });

// app.listen(process.env.PORT || 8080);

console.log("server is running!");

app.listen(port, function() {
  console.log(`api running on port ${port}`);
});