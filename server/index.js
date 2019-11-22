const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { getAbout } = require('../database/index.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client/dist'));

app.get('/about/:ticker', (req, res) => {
  // console.log('req.params', req.params);
  let queryString = req.params.ticker;
  console.log('queryString', queryString);
  getAbout(queryString, (err, result) => {
    if (err) {
      console.log('err:', err);
    } else {
      console.log('result from db query:', result);
      res.send(result);
    }
  });
});

app.get('/', (req, res) => {
  res.send('hello world');
});

const port = 3333;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
