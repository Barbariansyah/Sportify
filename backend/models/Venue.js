// Venues.js
var mongoose = require('mongoose');  

var VenueSchema = new mongoose.Schema({  
  name: String,
  location : 
  password: String
});

mongoose.model('Venue', VenueSchema);
module.exports = mongoose.model('User');