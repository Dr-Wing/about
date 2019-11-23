const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/about', {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('db connected!');
});

const aboutSchema = mongoose.Schema({
  ticker: { type: String, unique: true, required: true },
  about: String,
  CEO: String,
  open: Number,
  high: Number,
  low: Number,
  marketCap: Number,
  yearHigh: Number,
  employees: Number,
  priceEarnings: Number,
  yearLow: Number,
  headquarters: String,
  dividendYield: Number,
  founded: Number,
  averageVolume: Number,
  volume: Number
});

const About = mongoose.model('About', aboutSchema);

// retrieves data about stock based on ticker
const getAbout = (queryString, callback) => {
  About.findOne({ ticker: queryString })
    .lean()
    .then(result => {
      callback(null, result);
    })
    .catch(err => {
      console.log('err:', err);
    });
};

module.exports = { About, getAbout };
