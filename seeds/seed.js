const { tickers } = require('./tickerCreator.js');
const { About } = require('../database/index.js');
const faker = require('faker');

const save = () => {
  for (let i = 0; i < tickers.length; i++) {
    let stock = new About({
      ticker: tickers[i],
      about: faker.lorem.paragraph((sentence_count = 5)),
      CEO: faker.name.findName(),
      marketCap: (Math.random() * (10.0 - 1.0 + 1.0) + 1.0).toFixed(2),
      employees: faker.random.number({ min: 5000, max: 200000 }),
      priceEarnings: (Math.random() * (100.0 - 1.0 + 1.0) + 1.0).toFixed(2),
      yearHigh: (Math.random() * (5000.0 - 2500.0 - 1.0 + 1.0) + 1.0).toFixed(
        2
      ),
      yearLow: (Math.random() * (2500.0 - 1000.0 - 1.0 + 1.0) + 1.0).toFixed(2),
      headquarters: `${faker.address.city()}, ${faker.address.state()}`,
      dividendYield: (Math.random() * (10.0 - 1.0 + 1.0) + 1.0).toFixed(2),
      founded: faker.random.number({ min: 1950, max: 2019 }),
      averageVolume: (Math.random() * (100.0 - 1.0 + 1.0) + 1.0).toFixed(2),
      volume: (Math.random() * (100.0 - 1.0 + 1.0) + 1.0).toFixed(2)
    });
    stock.save((err, result) => {
      if (err) {
        console.log('err:', err);
      } else {
        console.log('success:', result);
      }
    });
  }
};

save();
