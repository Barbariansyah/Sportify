// Venues.js
var mongoose = require('mongoose');  
const Facility = require('./facilities')


var VenueSchema = new mongoose.Schema({  
  _id : Schema.Types.ObjectId,
  name: String,
  phone : Number,
  picture_url : String, 
  location : {
    nomor : Number,
    jalan : String,
    Kecamatan : String,
    wilayah : String,
    provinsi : String
  },
  variant : Number, // Lapangan tipe apa
  rating : Number,
  num_of_rating : Number,
  timeslice : Number,
  open_time : Date,
  end_time : Date,
  public_book : [Number],
  private_book : [Number],
  top_review : {
    author : String,
    text : String,
    rating : Number,
    icon : String
  },
  facilities : [{ type : Schema.Types.ObjectId, ref : "Facility"}]

});

mongoose.model('Venue', VenueSchema);
module.exports = mongoose.model('User');