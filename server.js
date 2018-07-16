var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var cors = require('cors');
var app = express();
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//set our port to either a predetermined port number if you have set it up, or 3001
app.set("port", process.env.PORT || 3001);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(cors());

//db config
var mongoDB = 'mongodb://awhite:asby1!@ds161026.mlab.com:61026/asbestos_trust_db';
mongoose.connect(mongoDB);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//body parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// allow cross-browser
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});
// handling static assets
// app.use(express.static(path.join(__dirname, 'build')));

// api handling
var TrustsSchema = new Schema({
  id: String,
  name: String
});

var Trust = mongoose.model('Trust', TrustsSchema);


app.get("/api/trusts", (req, res) => {
      Trust.find(function(err, trusts) {
        if (err) {
          res.send(err);
        }
        res.json(trusts)
      });
});

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});