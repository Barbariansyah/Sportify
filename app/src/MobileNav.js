import React from 'react'
import styled from 'styled-components'
import { BottomNavigation, BottomNavigationAction, Hidden } from '@material-ui/core'
import { Home, FormatListBulleted, Person } from '@material-ui/icons'

const StyledBottomNavigation = styled(BottomNavigation)`
  position: fixed;
  width: 100vw;
  bottom: 0;

  .Mui-selected {
    color: #457d3f;

    svg {
      fill: #457d3f;
    }
  }
`

const MobileNav = () => {
  const [value, setValue] = React.useState(0)

  return (
    <Hidden mdUp>
      <StyledBottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue)
        }}
        showLabels
      >
        <BottomNavigationAction label='Home' icon={<Home />} />
        <BottomNavigationAction label='Order' icon={<FormatListBulleted />} />
        <BottomNavigationAction label='Profile' icon={<Person />} />
      </StyledBottomNavigation>
    </Hidden>
  )
}

export default MobileNav
