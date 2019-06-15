// Event.js
var mongoose = require('mongoose');  
const Booking = require('./bookings');

var eventSchema = new mongoose.Schema({  
  _id : Number,
  name: String,
  isPrivate : Boolean,
  host_name : String,
  start_time : Date,
  venue_id : { type: Schema.Types.ObjectId, ref: 'Booking' },
  member_requirement : Number,
  member_joined : Number,
});

mongoose.model('Venue', VenueSchema);
module.exports = mongoose.model('User');