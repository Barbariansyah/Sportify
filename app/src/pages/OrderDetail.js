import React, { useState } from 'react'
import { Grid, Paper, Container } from '@material-ui/core'
import Highlight from '../Highlight'
import Section from '../Section'
import OrderCard from '../OrderCard'
import styled from 'styled-components'
import Header from '../Header'

const Venue = () => {
  return (
    <>
      <Header
        title='Order Details' />
      <Section>
        <Container maxWidth='lg'>
          <OrderCard />
        </Container>
      </Section>
    </>
  )
}

export default Venue
