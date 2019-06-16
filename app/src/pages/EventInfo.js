import React from 'react'
import { Grid, GridList, GridListTile, Container, Typography, Button, Icon } from '@material-ui/core'
import styled from 'styled-components'
import Section from '../Section'
import Header from '../Header'
import { Star, StarBorder } from '@material-ui/icons'
import { Link } from 'react-router-dom'

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

const Events = () => {
  return (
    <>
      <Header
        back='/'
        title='Event' />
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
              <Typography component='h6' variant='h6' >
                Futsal Match
              </Typography>
              <Typography component='subtitle1' variant='subtitle1'>
                Lapangan Futsal Tebet Mas - Rumput
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
            <SlotGrid item container spacing={1} xs={12}>
              <Grid item ms={6} className='tr'>
                    Sunday, 16 June 2019
              </Grid>
              <Grid item ms={6} className='tr'>
                    14:00 - 15:00
              </Grid>
              <Grid item ms={12} className='tr'>
                    3 More Slots available
              </Grid>
            </SlotGrid>
            <Grid item container spacing={1} xs={12}>
              <Grid item xs>
                <Button fullWidth variant='contained' color='primary' component={Link} to='/' type='submit'>
                  Join Event
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Section>
    </>
  )
}

export default Events
