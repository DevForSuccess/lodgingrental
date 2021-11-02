const db = require('./db');

module.exports = {
  listings: {
    get: function (cb) {
      db.query('SELECT * FROM listing_header', (err, results) => {
        cb(err, results);
      });
    }
  },
  listing: {
    get: function (id, cb) {
      db.query('SELECT id, listingName, listingDescription, hostId, review, rating, address1, address2, city, state, zipCode, country, accomodates, bathrooms AS numberOfBathrooms, bedrooms AS numberOfBedrooms, beds AS numberOfBeds FROM listing_header WHERE id = ' + id, (err, results) => {
        cb(err, results);
      });
    }
  },
  hostedBy: {
    get: function (id, cb) {
      db.query('SELECT id, hostId, accomodates, bathrooms, bedrooms, beds FROM listing_header WHERE id = ' + id, (err, result) => {
        cb(err, result);
      });
    }
  }

}