const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/about', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('db connected!');
});

const aboutSchema = mongoose.Schema({
  ticker: { type: String, unique: true, required: true, dropDups: true },
  about: String,
  CEO: String,
  marketCap: Number,
  yearHigh: Number,
  employees: Number,
  priceEarnings: Number,
  yearLow: Number,
  headquarters: String,
  dividendYeild: String,
  founded: Number,
  averageVolume: Number,
  volume: Number
});

const About = mongoose.model('About', aboutSchema);

module.exports = { About };
