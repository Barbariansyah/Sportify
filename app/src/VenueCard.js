import React from 'react'
import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Icon from '@material-ui/core/Icon'
import Typography from '@material-ui/core/Typography'
import StarIcon from '@material-ui/icons/Star'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import stadium from './assets/stadium.jpg'

const StyledCard = styled(Card)`
  display: flex;
  justify-content: space-between;
  margin: 10px;
  padding: 8px;

  .details {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .content {
    flex: 1 0 auto;
  }

  .price{
    margin-right: 2px;
  }

  .reviewCount{
      display: inline;
  }

  .controls {
    justify-content: space-between; 
    display: flex;
    align-items: center;
    margin-left: 10px;
    margin-bottom:2px;
  }

  .cover {
      height: 150px;
      width: 150px;
  }
`

export default function MediaControlCard () {
  // const classes = useStyles();
  // const theme = useTheme();

  return (
    <StyledCard>
      <div className='details'>
        <CardContent className='content'>
          <Typography component='h5' variant='h5'>
            Futsal Tebet Barat
          </Typography>
          <Typography variant='subtitle1' color='textSecondary'>
            1.2 Km from you
          </Typography>
        </CardContent>
        <div className='controls'>
          <div className='Review'>
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
                    (34)
            </Typography>
          </div>
          <div className='price'>
            <Typography variant='subtitle1' className='price'>
                from Rp232,000
            </Typography>
          </div>
        </div>

      </div>

      <CardMedia
        className='cover'
        image={stadium}
        title='venue pic'
      />
    </StyledCard>
  )
}
