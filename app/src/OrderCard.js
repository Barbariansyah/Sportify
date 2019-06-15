import React from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import TextField from '@material-ui/core/TextField'
import AddButton from '@material-ui/icons/Add'
import RemoveButton from '@material-ui/icons/Remove'
import { IconButton } from '@material-ui/core'

const StyledGrid = styled(Grid)`
    flex-grow: 1;

    .paper{
        padding: 16px;
        text-align: left;
        color: black;
    }

    .time{
        justify-content: space-between;
        display:flex;
    }

    .bill{
        justify-content: space-between;
        display:flex;
        margin-bottom: 10px;
    }

    .memberNumber {
        margin: 8px 36px;
        justify-content: space-between;
        display:flex;
    }

    .container{
        display: flex;
        flex-wrap: wrap;
    }

    .textField{
        margin: 0 8px;
        width: 200;
    }
`

export default function FullWidthGrid () {
  // const classes = useStyles();
  const [values, setValues] = React.useState({
    age: ''
  })

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value })
  }

  return (
    <StyledGrid container spacing={3}>
      <Grid item xs={12} sm={12}>
        <Paper className='paper'>
          <div>
            <Typography component='h6' variant='h6'>
                            This activity will be held for..
            </Typography>
            <Grid item>
              <ButtonGroup
                ButtonGroup fullWidth aria-label='Full width outlined button group'>
                <Button>Private</Button>
                <Button>Public</Button>
              </ButtonGroup>
            </Grid>
          </div>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper className='paper'>
          <div>
            <Typography component='h6' variant='h6'>
                            How many other member do you need?
            </Typography>
            <div className='memberNumber'>
              <div>
                <IconButton>
                  <RemoveButton />
                </IconButton>
              </div>
              <div>
                <form className='container' noValidate autoComplete='off'>
                  <TextField
                    id='outlined-number'
                    label='Number'
                    value={values.age}
                    onChange={handleChange('age')}
                    type='number'
                    className='textField'
                    InputLabelProps={{
                      shrink: true
                    }}
                    margin='normal'
                    variant='outlined'
                  />
                </form>
              </div>
              <div>
                <IconButton>
                  <AddButton />
                </IconButton>
              </div>
            </div>
          </div>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper className='paper'>
          <div>
            <Typography component='h5' variant='h5'>
                            Lapangan Futsal Tebet Mas
            </Typography>
            <Typography>
                            Rumput
            </Typography>
          </div>
          <div className='time'>
            <div>
              <Typography variant='subtitle1'>
                                    Sunday, 15 June 2019
              </Typography>
            </div>
            <div>
              <Typography variant='subtitle1'>
                                    14:00 - 16:00
              </Typography>
            </div>
          </div>
          <div className='bill'>
            {/* TODO: kasih garis disini ya */}
            <div>
              <Typography variant='h6'>
                                Total
              </Typography>
            </div>
            <div>
              <Typography variant='h6'>
                                Rp464,000
              </Typography>
            </div>
          </div>
          <Grid item>
            <ButtonGroup
              ButtonGroup fullWidth aria-label='Full width outlined button group'>
              <Button>Confirm Order</Button>
            </ButtonGroup>
          </Grid>
        </Paper>
      </Grid>
    </StyledGrid>
  )
}
