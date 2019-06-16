import React, { useState } from 'react'
import BookingListCard from '../BookingListCard'
import Header from '../Header'
import Section from '../Section'
import { Grid, Container } from '@material-ui/core'
import { KeyboardTimePicker } from '@material-ui/pickers'
import RemoveIcon from '@material-ui/icons/Remove'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import MomentUtils from '@date-io/moment'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import queryString from 'query-string'

import lapangan1 from '../assets/lapangan1.jpg'
import lapangan2 from '../assets/lapangan2.jpg'
import lapangan3 from '../assets/lapangan3.jpg'

const venue = [
  { name: 'Lapangan Futsal Tebet', distance: '1.2', status: 'Waiting for player', image: lapangan1 },
  { name: 'Setiabudi court', distance: '1.1', status: 'Coming Soon', image: lapangan2 },
  { name: 'Lapangan Tebet Mas', distance: '1.5', status: 'Completed', image: lapangan3 }
]

const VenueList = ({ location }) => {

  return (
    <>
      <Header back={false}/>

      <Section>
        <Container maxWidth='lg'>
          {
            venue.map(({ name, distance, status, image, id }, i) =>
              <Link to={'/bookings/'+i} className='no-decoration' key={i}>
                <BookingListCard
                  name={name}
                  distance={distance}
                  status={status}
                  image={image}
                />
              </Link>
            )
          }
        </Container>
      </Section>
    </>
  )
}

export default withRouter(VenueList)
