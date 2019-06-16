import React from 'react'
import MobileNav from './MobileNav'
import Index from './pages/Index'
import Venues from './pages/Venues'
import VenueList from './pages/VenueList'
import VenueInfo from './pages/VenueInfo'
import Event from './pages/Event'
import EventList from './pages/EventList'
import EventInfo from './pages/EventInfo'
import OrderDetail from './pages/OrderDetail'
import Review from './pages/Review'
import Bookings from './pages/Bookings'
import BookingStatus from './pages/BookingStatus'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App () {
  return (
    <Router>
      <Route path='/' exact component={Index} />
      <Route path='/venue' exact component={Venues} />
      <Route path='/venue-list' exact component={VenueList} />
      <Route path='/venue/:id' component={VenueInfo} />
      <Route path='/event' exact component={Event} />
      <Route path='/event-list' exact component={EventList} />
      <Route path='/event/:id' exact component={EventInfo} />
      <Route path='/book/:id' component={OrderDetail} />
      <Route path='/bookings' exact component={Bookings} />
      <Route path='/bookings/:id' component={BookingStatus} />
      <Route path='/review' component={Review} />
      <MobileNav />
    </Router>
  )
}

export default App
