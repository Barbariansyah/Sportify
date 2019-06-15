import React from 'react'
import withWidth, { isWidthDown } from '@material-ui/core/withWidth'
import styled from 'styled-components'
import HighlightCard from './HighlightCard'
import { GridList, GridListTile } from '@material-ui/core'

const StyledGridList = styled(GridList)`
    flex-wrap: nowrap;
    padding: 24px;
    background-color: #457d3f;
`

const Highlight = ({ width }) => {
  return (
    <StyledGridList
      cols={1.5}
      cellHeight={isWidthDown('sm', width) ? 150 : 340}
      spacing={10}>
      { [1, 2, 3, 4].map(el =>
        <GridListTile key={el}>
          <HighlightCard />
        </GridListTile>
      )}
    </StyledGridList>
  )
}

export default withWidth()(Highlight)
