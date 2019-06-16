import React, { useState, useEffect } from 'react'
import VenueCard from '../VenueCard'
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
import axios from 'axios'

import lapangan1 from '../assets/lapangan1.jpg'
import lapangan2 from '../assets/lapangan2.jpg'
import lapangan3 from '../assets/lapangan3.jpg'

const fallback_venue = [
  { name: 'Lapangan Futsal Tebet', distance: '1.2', rating: 4, ratingCount: '34', price: '232.000', image: lapangan1 },
  { name: 'Setiabudi court', distance: '1.1', rating: 4, ratingCount: '14', price: '224.000', image: lapangan2 },
  { name: 'Lapangan Tebet Mas', distance: '1.5', rating: 4, ratingCount: '10', price: '237.000', image: lapangan3 }
]

const VenueList = ({ location }) => {
  const queries = queryString.parse(location.search, { ignoreQueryPrefix: true })
  const [startTime, setStart] = useState(Date.parse(queries.startTime))
  const [endTime, setEnd] = useState(Date.parse(queries.endTime))
  const [venue, setVenue] = useState([])
  const back = `/venue?q=${queries.q}`

  useEffect (() => {
    async function fetchData() {
      const result = await axios.get(`http://localhost:3000/venues`)
      console.log(result.data.filter((e) => e.hasOwnProperty('name')))
      setVenue(result.data.filter((e) => e.hasOwnProperty('name')))
    }

    fetchData()
  })

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <Header
        back={back}
        title='Venues in Tebet' />

      <Section>
        <Container maxWidth='lg'>
          <Grid container xs={12} className='form-control'>
            <Grid item xs={5}>
              <KeyboardTimePicker
                value={startTime}
                fullWidth
                onChange={setStart}
                autoOk
                variant='inline'
                inputVariant='outlined'
                label='Start Time'
                format='HH:mm'
                InputAdornmentProps={{ position: 'start' }}
              />
            </Grid>
            <Grid item xs={2} className='flex all-center'>
              <RemoveIcon />
            </Grid>
            <Grid item xs={5}>
              <KeyboardTimePicker
                value={endTime}
                fullWidth
                onChange={setEnd}
                autoOk
                variant='inline'
                inputVariant='outlined'
                label='End Time'
                format='HH:mm'
                InputAdornmentProps={{ position: 'start' }}
              />
            </Grid>
          </Grid>

          {
            venue.map(({ name, rating, num_of_rating, picture_url, _id }, i) =>
              <Link to={'/venue/'+_id} className='no-decoration' key={_id}>
                <VenueCard
                  name={name}
                  distance='4.2'
                  rating={rating.toString}
                  ratingCount={num_of_rating}
                  price='250.000'
                  image={picture_url}
                />
              </Link>
            )
          }
        </Container>
        <Grid item xs={12} sm={6} className='sortFilter'>
          <ButtonGroup
            ButtonGroup fullWidth aria-label='Full width outlined button group'>
            <Button>Sort</Button>
            <Button>Filter</Button>
          </ButtonGroup>
        </Grid>
      </Section>
    </MuiPickersUtilsProvider>
  )
}

export default withRouter(VenueList)
