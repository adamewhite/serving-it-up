var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var app = express();
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

require('dotenv').config();

//set our port to either a predetermined port number if you have set it up, or 3001
// app.set("port", process.env.PORT || 3001);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//db config
var mongoDB = process.env.MONGODB_URI;
mongoose.connect(mongoDB, { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//body parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

var SitesSchema = new Schema({
  trust_id: Schema.ObjectId,
  name: {type: String},
  city: {type: String},
  state: {type: String},
  country: {type: String},
  start_date: {type: Date, default: '1/1/1900'},
  end_date: {type: Date, default: '12/31/2017'},
  site_code: {type: String},
  category: String,
  direction: String,
  narrowedTrustId: Schema.ObjectId
});

var Site = mongoose.model('Site', SitesSchema);

app.get("/api/sites", (req, res) => {
      Site.find({"city": "LITTLE ROCK"}, function(err, sites) {

        if (err) {
          res.send(err);
        }
        var trustList = [];

        var narrowedSiteCount = 1;
        
        var unnarrowedSiteCount = 1;

        var data = { sites: sites, trustList: trustList, narrowedSiteCount: narrowedSiteCount, unnarrowedSiteCount: unnarrowedSiteCount };

        res.json(data);
      });
});

var server = app.listen(process.env.PORT || 3001, function () {
  var port = server.address().port;
  console.log("Express is working on port " + port);
});

// app.listen(process.env.PORT || 3001, () => {
//   console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
// });