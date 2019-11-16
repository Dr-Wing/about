const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client/dist'));

app.get('/', (req, res) => {
  res.send('hello world');
});

const port = 3333;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
