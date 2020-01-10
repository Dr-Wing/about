const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { getAbout } = require("../database/index.js");
const config = require("../env.config.js");
const cors = require("cors");
var path = require("path");
var expressStaticGzip = require("express-static-gzip");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(expressStaticGzip(path.join(__dirname, "/../client/dist")));
app.use(express.static(__dirname + "/../client/dist"));

app.get("/about/:ticker", (req, res) => {
  // console.log('req.params', req.params);
  let queryString = req.params.ticker;
  console.log("queryString", queryString);
  getAbout(queryString, (err, result) => {
    if (err) {
      console.log("err:", err);
    } else {
      console.log("result from db query:", result);
      res.json(result);
    }
  });
});

app.get("/", (req, res) => {
  res.send("hello world");
});

const port = config.PORT;

let server = app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

module.exports = { app, server };
