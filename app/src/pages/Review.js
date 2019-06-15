import React, { useState } from 'react';
import { GridListTile, GridList, Grid, Container, TextField, Button } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import activity from '../assets/activity.png'
import Header from '../Header'
import Box from '@material-ui/core/Box';
import styled from 'styled-components';
import Icon from '@material-ui/core/Icon'
import StarIcon from '@material-ui/icons/Star'
import StarBorderIcon from '@material-ui/icons/StarBorder'

import fb from '../assets/fb.jpg'
import wa from '../assets/wa.jpg'
import tw from '../assets/tw.jpg'
import ig from '../assets/ig.jpg'
import { style } from '@material-ui/system';

const StyleBox = styled(Box)`
    .header-img{
        width: 100%;
        height: auto;
    }

    &.rate{
        margin: 10px;
    }

    &.share{
        margin-top: 10px;
    }
`

const StyleGridListTile = styled(GridListTile)`
    margin: 10px 0px;
    img{
        width: 60%;
        height: auto;
    }
`

const GridListWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    overflow: hidden;

    .grid{
        flex-wrap: nowrap;
    }
`

const tile = [
    {
      img: fb,
      title: 'image',
      author: 'author',
      featured: true,
    },
    {
      img: tw,
      title: 'image',
      author: 'author',
      featured: true,
    },
    {
      img: ig,
      title: 'image',
      author: 'author',
      featured: true,
    },
    {
        img: wa,
        title: 'image',
        author: 'author',
        featured: true,
    },
  ]

function Review()  {
    const [rev, setRev] = useState('')

    return (
        <>
            <Header
            back =''
            title='Share'
            />

            <StyleBox> 
                <img src={activity} alt='activity' className='header-img'/>
            </StyleBox>

            <StyleBox className='rate'>
                <Typography component='h6' variant='h6' className='tc'>
                    Rate your activity
                </Typography>

                <div className='tc'>
                    <Icon aria-label='Star'>
                        <StarIcon />
                    </Icon>
                    <Icon aria-label='Star'>
                        <StarIcon />
                    </Icon>
                    <Icon aria-label='Star'>
                        <StarIcon />
                    </Icon>
                    <Icon aria-label='StarBorde'>
                        <StarBorderIcon />
                    </Icon>
                    <Icon aria-label='StarBorde'>
                        <StarBorderIcon />
                    </Icon>
                </div>    
            </StyleBox>

            <StyleBox>
                <Container maxWidth='lg'>
          <Grid container >
              <Grid item xs={12} className='form-control'>
                <TextField
                  id='loc'
                  label='Share your thoughts'
                  variant='outlined'
                  fullWidth
                  value={rev}
                  onChange={setRev}
                />
              </Grid>
              
              <Grid item xs={12} className='form-control'>
                <Button fullWidth variant='outlined' type='submit'>
                      Submit
                </Button>
              </Grid>
          </Grid>
        </Container>
            </StyleBox>    
        
            <StyleBox className='share'> 
                <Typography component='h6' variant='h6' className='tc'>
                    Share your activity 
                </Typography>
                <GridListWrapper>
                    <GridList cols={2.5} className='grid'>
                    {tile.map((tile, i) => (
                    <StyleGridListTile key={i}>
                        <img src={tile.img} alt={tile.title} />
                    </StyleGridListTile>
                    ))}
                </GridList>
      </GridListWrapper>
            </StyleBox>
        </>
    )
}

export default Review