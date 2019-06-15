import React from 'react'
import { AppBar, Toolbar, Typography, Button, Hidden } from '@material-ui/core'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledAppBar = styled(AppBar)`
    background-color: #457d3f;

    .title {
        flex-grow: 1;
        text-align: center;
    }

    @media screen and (min-width: 960px){
        .title {
            text-align: left;
        }
    }

    a {
      color: white;
      text-decoration: none;
    }
`

const Header = () => {
  return (
    <div>
      <StyledAppBar>
        <Toolbar variant='dense'>
          {/* <IconButton edge="start" color="inherit" aria-label="Menu">
                        <ArrowBack />
                    </IconButton> */}
          <Typography variant='h6' className='title'>
                        Sportify
          </Typography>
          <Hidden smDown>
            <Link to='/'>
              <Button color='inherit'>Venue</Button>
            </Link>
            <Link to='/event'>
              <Button color='inherit'>Event</Button>
            </Link>
          </Hidden>
        </Toolbar>
      </StyledAppBar>
      <div style={{ height: 48 }} />
    </div>
  )
}

export default Header
