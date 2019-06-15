import React from 'react'
import Header from './Header'
import MobileNav from './MobileNav'
import Index from './pages/Index'
import Venue from './pages/Venue'
import Event from './pages/Event'
import OrderDetail from './pages/OrderDetail'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App () {
  return (
    <Router>
      <Header />
      <Route path='/' exact component={Index} />
      <Route path='/venue' exact component={Venue} />
      <Route path='/event' component={Event} />
      <Route path='/order-detail' component={OrderDetail} />
      <MobileNav />
    </Router>
  )
}

export default App
