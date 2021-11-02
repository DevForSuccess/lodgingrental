const db = require('./db');
const sampleListing = require('./sampleListing');

const insertSampleData = function () {
  sampleListing.forEach(listing => {
    let params = [listing.id, listing.listingName, listing.listingDescription, listing.hostId, listing.review, listing.rating, listing.address1, listing.address2, listing.city, listing.state, listing.zipCode, listing.country, listing.accommodates, listing.bathrooms, listing.bedrooms, listing.beds];

    db.query('insert into listing_header value (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', params, (err, results) => {
      if (err) {
        console.log('====== SEEDING DATABASE ERROR =======');
      } else {
        // console.log('======= SEEDING DATABASE SUCCESS =======');
      }
    });
  });
  db.end(err => {
    if (err) {
      console.log("Cannot close database");
    }
  });
};

insertSampleData();