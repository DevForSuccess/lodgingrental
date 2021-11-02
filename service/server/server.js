const express = require('express');
const headers = require('./cors');
const cors = require('cors');
const db = require('./db');
const models = require('./models');
const path = require("path");
const compression = require('compression');

const app = express();
app.use(compression());
app.use(cors());
const port = 5001;
app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("*/rooms/:listingId", (req, res) => {
  console.log('test');
  res.sendFile(path.resolve(__dirname + '/../client/dist/index.html'));
//   res.sendFile(path.join("/../client/dist/index1.html"));
});

app.get('/api/listingheader', (req, res) => {
  models.listings.get((err, results) => {
    res.json(results);
  });
});

app.get('/api/listingheader/:id', (req, res) => {
  models.listing.get(req.params.id, (err, result) => {
    res.json(result);
  });
});

app.get('/api/listingdescription/:id', (req, res) => {
  models.listing.get(req.params.id, (err, result) => {
    res.set(headers).status(200).json(result);
  });
});

app.get('/api/hostedBy/:id', (req, res) => {
  models.hostedBy.get(req.params.id, (err, result) => {
    if (err) {
      console.log('Error retrieving hostedBy info');
      res.end();
    } else {
      console.log(result[0]);
      res.json(result[0]);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});