import React from 'react'
import EventCard from '../EventCard'
import Header from '../Header'
import { Grid, Container } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import queryString from 'query-string'

import lapangan1 from '../assets/lapangan1.jpg'
import lapangan3 from '../assets/lapangan3.jpg'

const event = [
  { eventType: 'Futsal match', venue: 'Lapangan Futsal Tebet', distance: '1.2', rating: '4', ratingCount: '34', date: '16 June', time: '14:00 - 16:00', image: lapangan1, memberCount: '3' },
  { eventType: 'Futsal match', venue: 'Lapangan Futsal Tebet', distance: '1.2', rating: '4', ratingCount: '34', date: '16 June', time: '17:00 - 18:00', image: lapangan1, memberCount: '2' },
  { eventType: 'Futsal match', venue: 'Lapangan Tebet Mas', distance: '1.5', rating: '4', ratingCount: '34', date: '18 June', time: '14:00 - 16:00', image: lapangan3, memberCount: '3' }
]

function Event ({location}) {
  const sport = queryString.parse(location.search, { ignoreQueryPrefix: true }).q
  const back = `/event?q=${sport}`
  const title = sport.charAt(0).toUpperCase() + sport.slice(1) + ' Events'

  return (
        <>
          <Header
            back={back}
            title={title}
          />

          <Container maxWidth='lg'>
            {
              event.map(({ eventType, venue, distance, rating, ratingCount, date, time, image, memberCount }, i) =>
                <Link to={'/event/'+i} className='no-decoration' key={i}>
                  <EventCard
                    eventType={eventType}
                    venue={venue}
                    distance={distance}
                    rating={rating}
                    ratingCount={ratingCount}
                    date={date}
                    time={time}
                    image={image}
                    memberCount={memberCount}
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

        </>
  )
}

export default withRouter(Event)
