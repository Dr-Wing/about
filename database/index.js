const mongoose = require("mongoose");
const config = require("../env.config.js");

mongoose.connect(
  // `${config.DATABASE_URL}:${config.DATABASE_PORT}/${config.DATABASE_NAME}`,
  "mongodb://172.17.0.2:27017/robinhood",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("db connected!");
});

const aboutSchema = mongoose.Schema({
  ticker: { type: String, unique: true, required: true },
  about: String,
  CEO: String,
  open: Number,
  high: Number,
  low: Number,
  marketCap: String,
  yearHigh: Number,
  employees: Number,
  priceEarnings: Number,
  yearLow: Number,
  headquarters: String,
  dividendYield: Number,
  founded: Number,
  averageVolume: String,
  volume: String
});

const About = mongoose.model("About", aboutSchema);

// retrieves data about stock based on ticker
const getAbout = (queryString, callback) => {
  About.findOne({ ticker: queryString })
    .lean()
    .then(result => {
      callback(null, result);
    })
    .catch(err => {
      console.log("err:", err);
    });
};

module.exports = { About, getAbout, mongoose };
