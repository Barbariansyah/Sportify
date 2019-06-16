import React, { useState } from 'react'
import { Grid, Paper, Container, Typography, Link, TextField } from '@material-ui/core'
import { NavLink, Link as RouterLink } from 'react-router-dom'
import Highlight from '../Highlight'
import Section from '../Section'
import styled from 'styled-components'
import Header from '../Header'
import { withRouter } from 'react-router'

import football from '../assets/football.png'
import basketball from '../assets/basketball-ball.png'
import pong from '../assets/ping-pong.png'
import shuttlecock from '../assets/shuttlecock.png'
import tennis from '../assets/tennis.png'
import volley from '../assets/volley-ball.png'

const sports = [
  { text: 'Football', icon: football, q: 'football' },
  { text: 'Basketball', icon: basketball, q: 'basket' },
  { text: 'Ping Pong', icon: pong, q: 'pong' },
  { text: 'Badminton', icon: shuttlecock, q: 'badminton' },
  { text: 'Tennis', icon: tennis, q: 'tennis' },
  { text: 'Volleyball', icon: volley, q: 'volley' }
]

const MainGrid = styled(Grid)`
  .sport-type {
    height: 150px;

    &__icon {
      height: 80px;
    }
  }

  @media screen and (min-width: 960px){
    .sport-type {
      height: 250px;
    }
  }
`

function Event ({ history }) {
  const [loc, setLoc] = useState('')

  const handleLocChange = (e) => {
    setLoc(e.target.value)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      history.push(`/event-list?q=${loc}`)
    }
  }

  return (
    <>
      <Header
        back={false} />
      <Highlight />
      <Section>
        <Container maxWidth='lg'>
          <Grid container spacing={1}>
            <Grid item xs>
              <Typography variant='h6' className='tc'>
                <Link component={NavLink} exact to='/' activeClassName='active' className='main-link'>
                  VENUE
                </Link>
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography variant='h6' className='tc'>
                <Link component={NavLink} to='/event' activeClassName='active' className='main-link'>
                  EVENT
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Section>
      <Section>
        <Container maxWidth='lg'>
          <MainGrid container spacing={1}>
            <Grid item xs={12} className='form-control'>
              <TextField
                id='loc'
                label='Search Event or Places'
                variant='outlined'
                type='search'
                fullWidth
                value={loc}
                onChange={handleLocChange}
                onKeyDown={handleKeyDown}
              />
            </Grid>
            { sports.map(({ text, icon, q }) =>
              <Grid item xs={6} md={3}>
                <Link component={RouterLink} to={'/event-list?q=' + q}>
                  <Paper className='sport-type flex all-center'>
                    <Grid container style={{ margin: '10px 0' }}>
                      <Grid item xs={12} className='flex all-center'>
                        <img src={icon} alt='football' className='sport-type__icon' />
                      </Grid>
                      <Grid item xs={12} className='tc'>
                        <span className='sport-type__text'>
                          {text}
                        </span>
                      </Grid>
                    </Grid>
                  </Paper>
                </Link>
              </Grid>
            )}
          </MainGrid>
        </Container>
      </Section>
    </>
  )
}

export default withRouter(Event)
