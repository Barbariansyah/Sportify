// bookingController.js
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()

var bodyParser = require('body-parser');


router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Booking = require('../../models/bookings');
// ADD THIS PART

// CREATES A NEW BOOKING
router.post('/', function (req, res) {

    Booking.create({
            venue : req.body.venue,
            date : req.body.date,
            time_start : req.body.time_start,
            time_end : req.body.time_end,
        }, 

        function (err, booking) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(booking);
        });
});

router.get('/', function (req, res) {

    Booking.find({}, function (err, bookings) {
        if (err) {
            return res.status(500).send("There was a problem finding the bookings.");
        }
        else {
            res.status(200).send(bookings);
        }
    }); 

});

module.exports = router;