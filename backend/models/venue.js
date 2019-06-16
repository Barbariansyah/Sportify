// Venues.js
var mongoose = require('mongoose');  
// const Facility = require('./facilities');
// const Bookings = require('./bookings');

var VenueSchema = new mongoose.Schema({  
  // _id : mongoose.Types.ObjectId,
  name: String,
  // phone : Number,
  picture_url : String, 
  // location : {
  //   nomor : Number,
  //   jalan : String,
  //   Kecamatan : String,
  //   wilayah : String,
  //   provinsi : String
  // },
  variant : Number, // Lapangan tipe apa
  rating : Number,
  num_of_rating : Number,
  // timeslice : Number,
  // open_time : Date,
  // end_time : Date,
  // bookings : [{type : mongoose.Types.ObjectId, ref : "Bookings"}],
  // public_book : [Number],
  // private_book : [Number],
  // top_review : {
  //   author : String,
  //   text : String,
  //   rating : Number,
  //   icon : String
  // },
  // facilities : [{ type : mongoose.Types.ObjectId, ref : "Facility"}]

});

mongoose.model('Venue', VenueSchema);
module.exports = mongoose.model('Venue');