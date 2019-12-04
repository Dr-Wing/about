const { tickers } = require('./tickerCreator.js');
const { About } = require('../database/index.js');
const faker = require('faker');
var accounting = require('accounting');

const nFormatter = num => {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'T';
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  }
  return num;
};

const save = () => {
  for (let i = 0; i < tickers.length; i++) {
    let stock = new About({
      ticker: tickers[i],
      about: faker.lorem.paragraph((sentence_count = 10)),
      CEO: faker.name.findName(),
      open: 0,
      high: 0,
      low: 0,
      marketCap: nFormatter(
        faker.random.number({ min: 1000000000, max: 2500000000 })
      ),
      employees: faker.random.number({ min: 5000, max: 200000 }),
      priceEarnings: (Math.random() * (100 - 1 + 1) + 1).toFixed(2),
      yearHigh: 0,
      yearLow: 0,
      headquarters: `${faker.address.city()}, ${faker.address.state()}`,
      dividendYield: (Math.random() * (10 - 1 + 1) + 1).toFixed(2),
      founded: faker.random.number({ min: 1950, max: 2019 }),
      averageVolume: nFormatter(
        faker.random.number({ min: 10000000, max: 30000000 })
      ),
      volume: nFormatter(faker.random.number({ min: 10000000, max: 30000000 }))
    });
    stock.save((err, result) => {
      if (err) {
        console.log('err:', err);
        //throw new Error('Err: ', err);
      } else {
        console.log('success!');
      }
    });
  }
};

module.exports = { save };
