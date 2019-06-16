import React from 'react'
import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Icon from '@material-ui/core/Icon'
import Typography from '@material-ui/core/Typography'
import StarIcon from '@material-ui/icons/Star'
import StarBorderIcon from '@material-ui/icons/StarBorder'

const StyledCard = styled(Card)`
  display: flex;
  justify-content: space-between;
  margin: 8px 4px;
  padding: 2px;

  .details {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .content {
    flex: 1 0 auto;
    padding: 2px;
  }

  .price{
    text-align: right;
    padding-right: 2px;
  }

  .reviewCount{
      display: inline;
  }

  .controls {
    justify-content: space-between; 
    display: flex;
    align-items: center;
    margin-left: 2px;
    margin-bottom:2px;
  }

  .cover {
      height: 150px;
      width: 150px;
  }
`

export default function MediaControlCard ({ name, distance, status, image, id }) {
  return (
    <StyledCard>
      <div className='details'>
        <CardContent className='content'>
          <Typography component='h6' variant='h6'>
            {name}
          </Typography>
          <Typography variant='subtitle1' color='textSecondary'>
            {distance} Km from you
          </Typography>
        </CardContent>
        <div className='controls'>
          <div className='price'>
            <Typography variant='subtitle1' className='price'>
                {status}
            </Typography>
          </div>
        </div>

      </div>

      <CardMedia
        className='cover'
        image={image}
        title='venue pic'
      />
    </StyledCard>
  )
}
