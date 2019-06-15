import React, { useState } from 'react'
import { Grid, Container, TextField, Button } from '@material-ui/core'
import Highlight from '../Highlight'
import Section from '../Section'
import Header from '../Header'
import { KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers'
import RemoveIcon from '@material-ui/icons/Remove'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import MomentUtils from '@date-io/moment'
import { withRouter } from 'react-router'

const Venues = ({ history }) => {
  const [loc, setLoc] = useState('')
  const [startTime, setStart] = useState(new Date())
  const [endTime, setEnd] = useState(new Date())
  const [date, setDate] = useState(new Date())

  const handleSubmit = (e) => {
    e.preventDefault()
    history.push('/venue-list')
  }

  const handleLocChange = (e) => {
    setLoc(e.target.value)
  }

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <Header
        back='/'
        title='Venue' />
      <Highlight />
      <Section>
        <Container maxWidth='lg'>
          <Grid container >
            <form onSubmit={handleSubmit} className='form'>
              <Grid item xs={12} className='form-control'>
                <TextField
                  id='loc'
                  label='Where do you want to play?'
                  variant='outlined'
                  fullWidth
                  value={loc}
                  onChange={handleLocChange}
                />
              </Grid>
              <Grid item xs={12} className='form-control'>
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
              <Grid item container xs={12} className='form-control'>
                <Grid item xs={5}>
                  <KeyboardTimePicker
                    value={startTime}
                    fullWidth
                    onChange={setStart}
                    autoOk
                    variant='inline'
                    inputVariant='outlined'
                    label='Start Time'
                    format='HH:mm'
                    InputAdornmentProps={{ position: 'start' }}
                  />
                </Grid>
                <Grid item xs={2} className='flex all-center'>
                  <RemoveIcon />
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
                    format='HH:mm'
                    InputAdornmentProps={{ position: 'start' }}
                  />
                </Grid>
              </Grid>
              <Grid item xs={12} className='form-control'>
                <Button fullWidth variant='outlined' type='submit'>
                      Find Venue
                </Button>
              </Grid>
            </form>
          </Grid>
        </Container>
      </Section>
    </MuiPickersUtilsProvider>
  )
}

export default withRouter(Venues)
