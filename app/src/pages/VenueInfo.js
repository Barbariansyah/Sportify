import React from 'react'
import { Grid, GridList, GridListTile, Container, Typography, Button, Icon } from '@material-ui/core'
import styled from 'styled-components'
import Section from '../Section'
import Header from '../Header'
import { Star, StarBorder } from '@material-ui/icons'

import lapangan1 from '../assets/lapangan1.jpg'
import lapangan2 from '../assets/lapangan2.jpg'
import lapangan3 from '../assets/lapangan3.jpg'

const GridListWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    overflow: hidden;
    
    .grid{
        flex-wrap: nowrap;
    }
`

const timeSlots = [
  { time: '12:00', color: 'secondary' },
  { time: '15:00', color: 'primary' },
  { time: '18:00' },
  { time: '21:00', color: 'secondary' },
  { time: '13:00', color: 'secondary' },
  { time: '16:00' },
  { time: '19:00' },
  { time: '22:00' },
  { time: '14:00', color: 'primary' },
  { time: '17:00' },
  { time: '20:00' },
  { time: '23:00' }
]

const SlotGrid = styled(Grid)`
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 5px 0;
    background: #C2C6C1;
    display: flex;
    justify-content: space-evenly;
`

const tile = [
  {
    img: lapangan1,
    title: 'image',
    author: 'author',
    featured: true
  },
  {
    img: lapangan2,
    title: 'image',
    author: 'author',
    featured: true
  },
  {
    img: lapangan3,
    title: 'image',
    author: 'author',
    featured: true
  }
]

const Venues = () => {
  return (
    <>
      <Header
        back='/'
        title='Venue' />
      <GridListWrapper>
        <GridList cols={2.5} className='grid'>
          {tile.map((tile, i) => (
            <GridListTile key={i}>
              <img src={tile.img} alt={tile.title} />
            </GridListTile>
          ))}
        </GridList>
      </GridListWrapper>
      <Section>
        <Container maxWidth='lg'>
          <Grid container >
            <Grid item xs={12}>
              <Typography component='h6' variant='h6'>
                Lapangan Futsal Tebet Mas
              </Typography>
            </Grid>
            <Grid item container spacing={1} xs={12}>
              {/* Rating */}
              <Grid item xs>
                <Icon aria-label='Star'>
                  <Star className='fs-22' />
                </Icon>
                <Icon aria-label='Star'>
                  <Star className='fs-22' />
                </Icon>
                <Icon aria-label='Star'>
                  <Star className='fs-22' />
                </Icon>
                <Icon aria-label='StarBorder'>
                  <StarBorder className='fs-22' />
                </Icon>
                <Icon aria-label='StarBorder'>
                  <StarBorder className='fs-22' />
                </Icon>
              </Grid>
              {/* Distance */}
              <Grid item xs className='tr'>
                    1.4 Km from you
              </Grid>
            </Grid>
            <Grid item container spacing={1} xs={12}>
              <Grid item xs>
                <Button fullWidth variant='outlined' color='primary' type='submit'>
                  Rumput
                </Button>
              </Grid>
              <Grid item xs>
                <Button fullWidth variant='outlined' type='submit'>
                  Semen
                </Button>
              </Grid>
            </Grid>
            <SlotGrid item container spacing={1} xs={12} >
              {timeSlots.map(({ time, color }) =>
                <Grid item ms={6}>
                  <Button fullWidth variant='contained' type='submit' color={color}>
                    {time}
                  </Button>
                </Grid>
              )
              }
            </SlotGrid>
            <Grid item container spacing={1} xs={12}>
              <Grid item xs>
                <Button fullWidth variant='contained' color='primary' type='submit'>
                  Book Venue
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Section>
    </>
  )
}

export default Venues
