// Bookings.js
var mongoose = require('mongoose');  
const Venue = require('./venue')


var BookingSchema = new mongoose.Schema({  
    venue : { type : mongoose.Types.ObjectId, ref : "Venue"},
    date : Number,
    time_start : Number,
    time_end : Number,

    //   name: String,
//   phone : Number,
//   picture_url : String, 
//   location : {
//     nomor : Number,
//     jalan : String,
//     Kecamatan : String,
//     wilayah : String,
//     provinsi : String
//   },
//   variant : Number, // Lapangan tipe apa
//   rating : Number,
//   num_of_rating : Number,
//   timeslice : Number,
//   open_time : Date,
//   end_time : Date,
//   public_book : [Number],
//   private_book : [Number],
//   top_review : {
//     author : String,
//     text : String,
//     rating : Number,
//     icon : String
//   },
//   facilities : [{ type : Schema.Types.ObjectId, ref : "Facility"}]

});

mongoose.model('Booking', BookingSchema);
module.exports = mongoose.model('Booking');