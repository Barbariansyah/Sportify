import React from 'react'
import { Container, Paper, Grid, Typography, Button, ButtonGroup, TextField } from '@material-ui/core'
import Section from '../Section'
import Header from '../Header'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

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

    button.active{
        border-color: #2196f3;
        color: #2196f3;
    }
`

const Venue = () => {
  return (
    <>
      <Header
        title='Order Details' />
      <Section>
        <Container maxWidth='lg'>
            <StyledGrid>
            <Grid item xs={12} sm={12}>
                <Paper className='paper'>
                <div>
                    <Typography component='h6' variant='h6'>
                                    This activity will be held for..
                    </Typography>
                    <Grid item>
                        <ButtonGroup fullWidth disabled aria-label='Full width outlined button group'>
                            <Button >Private</Button>
                            <Button className='active'>Public</Button>
                        </ButtonGroup>
                    </Grid>
                </div>
                <div style={{ marginTop: '10px' }}>
                    <Typography component='h6' variant='h6'>
                                    Waiting for additional member
                    </Typography>
                    <div className='memberNumber'>
                        <div>
                            <TextField
                                disabled
                                id='member-number'
                                label='Additional Member'
                                value={3}
                                type='number'
                                InputLabelProps={{
                                shrink: true
                                }}
                                margin='normal'
                                variant='outlined'
                            />
                        </div>
                    </div>
                </div>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Paper className='paper'>
                <div>
                    <Typography component='h5' variant='h5'>
                                    Lapangan Futsal Tebet
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
                <Button fullWidth variant='outlined' aria-label='Full width outlined button' to='/review' component={Link}>
                    Share
                </Button>
                </Paper>
            </Grid>
            </StyledGrid>
        </Container>
      </Section>
    </>
  )
}

export default Venue
