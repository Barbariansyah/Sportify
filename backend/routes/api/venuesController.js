// VenuesController.js
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()

var bodyParser = require('body-parser');


router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Venue = require('../../models/venue');
var User = require('../../models/user')


// RETURNS ALL THE VENUES BASED ON FILTERS
router.get('/X', function (req, res) {

    User.find({}, function (err, venues) {
        if (err) {
            return res.status(500).send("There was a problem finding the venues.");
        }
        else {
               
            //filter by params
            //venues.filter((element,index) => {
            // })
            res.status(200).send(venues)
            // res.status(200).send(venues);
        }
    }); 
});


// RETURNS VENUES
router.get('/', function (req, res) {
    Venue.find({}, function (err, venues) {
        if (err) {
            return res.status(500).send("There was a problem finding the venues.");
        }
        else {
            res.status(200).send(venues);
        }
    }); 
});

// GETS A SINGLE VENUE FROM THE DATABASE
router.get('/:id', function (req, res) {
    Venue.findById(req.params.id, function (err, venue) {
        if (err) return res.status(500).send("There was a problem finding the venue.");
        if (!venue) return res.status(404).send("No venue found.");
        res.status(200).send(venue);
    });
});

// UPDATES A SINGLE VENUE IN THE DATABASE (PUT)
router.put('/:id', function (req, res) {
    
    Venue.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, venue) {
        if (err) return res.status(500).send("There was a problem updating the venue.");
        res.status(200).send(venue);
    });
});

// CREATES A NEW USER
router.post('/', function (req, res) {

    Venue.create({
        name: req.body.name,
        // phone : Number,
        picture_url : req.body.url, 
        // location : {
        //   nomor : Number,
        //   jalan : String,
        //   Kecamatan : String,
        //   wilayah : String,
        //   provinsi : String
        // },
        variant : req.body.var, // Lapangan tipe apa
        rating : req.body.rating,
        num_of_rating : req.body.num_of_rating
        }, 

        function (err, user) {
            if (err) return res.status(500).send(err);
            res.status(200).send(user);
        });
});

module.exports = router;