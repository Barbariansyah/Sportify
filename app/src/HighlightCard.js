import React from 'react'
import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import stadium from './assets/stadium.jpg'

const StyledCard = styled(Card)`
    height: 100%;
    width: auto;

    .media {
        height: 100%;
        width: auto;
    }
`

const HighlightCard = () => {
  return (
    <StyledCard>
      <CardMedia
        className='media'
        image={stadium}
        title='Stadium'
      />
    </StyledCard>
  )
}

export default HighlightCard
