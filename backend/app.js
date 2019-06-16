// Full Documentation - https://www.turbo360.co/docs
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const cors = require('cors')

// const app = vertex.express() // initialize app


/*  
	Apps can also be initialized with config options as shown in the commented out example below. Options
	include setting views directory, static assets directory, and database settings. To see default config
	settings, view here: https://www.turbo360.co/docs 
*/

const config = {
	views: 'views', 		// Set views directory 
	static: 'public', 		// Set static assets directory
	db: { 					// Database configuration. Remember to set env variables in .env file: MONGODB_URI, PROD_MONGODB_URI
		url: 'mongodb+srv://little_chicken:skyisfalling@cluster0-wvvl6.mongodb.net/test?retryWrites=true&w=majority',
		type: 'mongo',
		onError: (err) => {
			console.log('DB Connection Failed!')
		},
		onSuccess: () => {
			console.log('DB Successfully Connected!')
		}
	}
}

const app = vertex.app(config) // initialize app with config options




// //import routes
// const index = require('./routes/index')
// const api = require('./routes/api')
const UserController = require('./routes/api/userController');
const VenueController = require('./routes/api/venuesController');
const BookingController = require('./routes/api/bookingController');




// // set routes
app.use(cors());
app.use('/venues', VenueController);
app.use('/users', UserController);
app.use('/bookings', BookingController);


module.exports = app