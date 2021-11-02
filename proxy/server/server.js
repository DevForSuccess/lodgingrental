const express = require('express');
const cors = require('cors');
const db = require('./db');
const models = require('./models');

const app = express();
app.use(cors());

const port = 5000;
app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/hostedBy/:id', (req, res) => {
  models.hostedBy.get(req.params.id, (err, result) => {
    if (err) {
      console.log('Error retrieving hostedBy info');
    } else {
      console.log(result[0]);
      res.json(result[0]);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});