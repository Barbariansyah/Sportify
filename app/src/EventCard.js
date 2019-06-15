import React from 'react'
import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import PersonIcon from '@material-ui/icons/Person'

const StyledCard = styled(Card)`
  display: flex;
  justify-content: space-between;
  margin: 8px 4px;
  padding: 2px;

  .event{
      display: flex;
  }  
    
  .details {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .content {
    flex: 1 0 auto;
    padding: 2px;
  }

  .dateTime{
    display: flex;
    justify-content: space-between;
  }

  .reviewCount{
      display: inline;
  }

  .controls {
    justify-content: space-between; 
    display: flex;
    align-items: center;
    margin: 2px 6px;
  }

  .cover {
      height: 150px;
      width: 150px;
  }
`

export default function MediaControlCard ({ eventType, venue, distance, rating, ratingCount, date, time, image, id, memberCount }) {
  return (
    <StyledCard>
      <div className='details'>
        <CardContent className='content'>
          <div className='event'>
            <Typography component='h6' variant='h6'>
              {eventType}
            </Typography>

            <PersonIcon />
            <Typography component='h6' variant='h6'>
            ({memberCount})
            </Typography>
          </div>
          <Typography variant='subtitle1' color='textSecondary'>
            at {venue}
          </Typography>
          <Typography variant='subtitle1' color='textSecondary'>
            {distance} Km from you
          </Typography>
        </CardContent>
        <div className='controls'>
          {/* <div className='Review'>
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
            <Typography variant='subtitle1' className='reviewCount'>
                    ({ratingCount})
            </Typography>
  </div> */}
          <div>
            <Typography variant='subtitle1' className='date'>
              {date}
            </Typography>
          </div>
          <div>
            <Typography variant='subtitle1' className='date'>
              {time}
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
