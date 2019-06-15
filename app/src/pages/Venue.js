import React, { useState } from 'react'
import { Grid, Container, TextField, Button } from '@material-ui/core'
import Highlight from '../Highlight'
import Section from '../Section'
import { KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers'

const Venue = () => {
  const [loc, setLoc] = useState('')
  const [startTime, setStart] = useState(new Date())
  const [endTime, setEnd] = useState(new Date())
  const [date, setDate] = useState(new Date())

  const handleSubmit = (e) => {
    console.log(e)
    e.preventDefault()
  }

  return (
    <>
      <Highlight />
      <Section>
        <Container maxWidth='lg'>
          <Grid container >
            <form onSubmit={handleSubmit} className='form'>
              <Grid item xs={12}>
                <TextField
                  id='loc'
                  label='Where do you want to play?'
                  variant='outlined'
                  fullWidth
                  value={loc}
                  onChange={setLoc}
                />
              </Grid>
              <Grid item xs={12}>
                <KeyboardDatePicker
                  value={date}
                  fullWidth
                  onChange={setDate}
                  autoOk
                  variant='inline'
                  inputVariant='outlined'
                  label='Date'
                  format='ddd DD/MM/YY'
                  InputAdornmentProps={{ position: 'start' }}
                />
              </Grid>
              <Grid item container xs={12}>
                <Grid item xs={5}>
                  <KeyboardTimePicker
                    value={startTime}
                    fullWidth
                    onChange={setStart}
                    autoOk
                    variant='inline'
                    inputVariant='outlined'
                    label='Start Time'
                    format='ddd DD/MM/YY'
                    InputAdornmentProps={{ position: 'start' }}
                  />
                </Grid>
                <Grid item xs={2} className='tc'>
                  <span>-</span>
                </Grid>
                <Grid item xs={5}>
                  <KeyboardTimePicker
                    value={endTime}
                    fullWidth
                    onChange={setEnd}
                    autoOk
                    variant='inline'
                    inputVariant='outlined'
                    label='End Time'
                    format='ddd DD/MM/YY'
                    InputAdornmentProps={{ position: 'start' }}
                  />
                </Grid>
              </Grid>
              <Button variant='contained' type='submit'>
                    Find Venue
              </Button>
            </form>
          </Grid>
        </Container>
      </Section>
    </>
  )
}

export default Venue
