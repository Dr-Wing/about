const { tickers } = require('./tickerCreator.js');
const { About } = require('../database/index.js');
const faker = require('faker');

const save = () => {
  for (let i = 0; i < tickers.length; i++) {
    let stock = new About({
      ticker: tickers[i],
      about: faker.lorem.paragraph((sentence_count = 5)),
      CEO: faker.name.findName(),
      open: 0,
      high: 0,
      low: 0,
      marketCap: (Math.random() * (10 - 1 + 1) + 1).toFixed(2),
      employees: faker.random.number({ min: 5000, max: 200000 }),
      priceEarnings: (Math.random() * (100 - 1 + 1) + 1).toFixed(2),
      yearHigh: (Math.random() * (100 - 1 + 1) + 1).toFixed(2),
      yearLow: (Math.random() * (100 - 1 + 1) + 1).toFixed(2),
      headquarters: `${faker.address.city()}, ${faker.address.state()}`,
      dividendYield: (Math.random() * (10 - 1 + 1) + 1).toFixed(2),
      founded: faker.random.number({ min: 1950, max: 2019 }),
      averageVolume: (Math.random() * (100 - 1 + 1) + 1).toFixed(2),
      volume: (Math.random() * (100 - 1 + 1) + 1).toFixed(2)
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
