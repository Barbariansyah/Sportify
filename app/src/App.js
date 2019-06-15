import React from 'react'
import { Grid, Paper, Container } from '@material-ui/core'
import Header from './Header'
import Highlight from './Highlight'
import Section from './Section'
import styled from 'styled-components'
import './App.css'

const MainGrid = styled(Grid)`
  .sport-type {
    height: 100px;
  }

  @media screen and (min-width: 960px){
    .sport-type {
      height: 200px;
    }
  }
`

function App () {
  return (
    <div className='App'>
      <Header />
      <Highlight />
      <Section>
        <Container maxWidth='lg'>
          <MainGrid container spacing={1}>
            { [1, 2, 3, 4, 5, 6, 7, 8].map(el =>
              <Grid item xs={6} md={3}>
                <Paper className='sport-type' />
              </Grid>
            )}
          </MainGrid>
        </Container>
      </Section>
    </div>
  )
}

export default App
