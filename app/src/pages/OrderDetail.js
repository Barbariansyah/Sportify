import React from 'react'
import { Container } from '@material-ui/core'
import Section from '../Section'
import OrderCard from '../OrderCard'
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
