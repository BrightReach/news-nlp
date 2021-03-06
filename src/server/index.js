const dotenv = require('dotenv');
dotenv.config();

var aylien = require('aylien_textapi');
var textapi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY,
});

var path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');

const app = express();

app.use(express.static('dist'));
const cors = require('cors');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

console.log(__dirname);

app.post('/evaluate', (req, res) => {
  console.log(req.body.url);
  textapi.sentiment(
    {
      url: req.body.url,
    },
    (err, response) => {
      if (err === null) {
        res.send(response);
      }
    }
  );
});

app.get('/', (req, res) => {
  // res.sendFile('dist/index.html')
  res.sendFile(path.resolve('src/client/views/index.html'));
});

// designates what port the app will listen to for incoming requests
app.listen(8081, () => {
  console.log('Example app listening on port 8081!');
});

app.post('/test', (req, res) => {
  console.log(req.body);
  res.send(mockAPIResponse);
});
