import React from 'react'
import { AppBar, Toolbar, Typography, Button, Hidden, Link, IconButton } from '@material-ui/core'
import { ArrowBack } from '@material-ui/icons'
import { Link as RouterLink } from 'react-router-dom'
import styled from 'styled-components'

const StyledAppBar = styled(AppBar)`
    background: #527946;

    .title {
      flex-grow: 1;
      text-align: center;
      
      &.back {
        text-align: left;
      }
    }

    @media screen and (min-width: 960px){
        .title {
            text-align: left;
        }
    }

    a {
      color: white;

      &:hover {
        text-decoration: none;
      }
    }
`

const Header = ({ back, title, subtitle }) => {
  return (
    <div>
      <StyledAppBar>
        <Toolbar variant='dense'>
          { back ? <IconButton edge='start' color='inherit' to={back} component={RouterLink} aria-label='Menu'>
            <ArrowBack />
          </IconButton> : '' }
          <Typography variant='h6' className={back ? 'title back' : 'title'}>
            <Link to={back || '/'} variant='inherit' component={RouterLink}>
              { title || 'Sportify' }
            </Link>
          </Typography>
          <Hidden smDown>
            <Button color='inherit' to='/' component={RouterLink}>Venue</Button>
            <Button color='inherit' to='/event' component={RouterLink}>Event</Button>
          </Hidden>
        </Toolbar>
      </StyledAppBar>
      <div style={{ height: 48 }} />
    </div>
  )
}

export default Header
