import React from 'react'
import Header from './Header'
import MobileNav from './MobileNav'
import Index from './pages/Index'
import LapanganFutsal from './pages/LapanganFutsal'
import Venues from './pages/Venues'
import VenueList from './pages/VenueList'
import VenueInfo from './pages/VenueInfo'
import Event from './pages/Event'
import EventList from './pages/EventList'
import OrderDetail from './pages/OrderDetail'
import Review from './pages/Review'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App () {
  return (
    <Router>
      <Route path='/' exact component={Index} />
      <Route path='/venue' exact component={Venues} />
      <Route path='/venue-list' exact component={VenueList} />
      <Route path='/venue-info' exact component={VenueInfo} />
      <Route path='/event' exact component={Event} />
      <Route path='/event-list' exact component={EventList} />
      <Route path='/order-detail' component={OrderDetail} />
      <Route path='/lapangan-futsal' component={LapanganFutsal} />
      <Route path='/review' component={Review} />
      <MobileNav />
    </Router>
  )
}

export default App
