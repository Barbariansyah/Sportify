import React, { useState } from 'react'
import { Grid, Paper, Container } from '@material-ui/core'
import Highlight from '../Highlight'
import Section from '../Section'
import OrderCard from '../OrderCard'
import styled from 'styled-components'

const Venue = () => {
  const [startTime, setStart] = useState(new Date())
  const [endTime, setEnd] = useState(new Date())

  return (
    <>
      <Section>
        <Container maxWidth='lg'>
          <OrderCard />
        </Container>
      </Section>
    </>
  )
}

export default Venue
