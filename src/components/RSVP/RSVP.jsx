import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// MUI imports
import { styled } from '@mui/material/styles';
import { Box, Button, Card, Checkbox, FormControlLabel, Grid, Paper, Stack, TextField, Typography } from '@mui/material';

// CUSTOM COMPONENTS
import Footer from '../Footer/Footer';
import GoogleMap from '../GoogleMap/GoogleMap';
import Loading from '../Loading/Loading';
import PlayerToggle from '../PlayerToggle/PlayerToggle'
import RsvpToggle from '../RsvpToggle/RsvpToggle'

function RSVP({eventId}){
    const dispatch = useDispatch();
    const details = useSelector(store => store.details.details);
    const rsvp = useSelector(store => store.rsvp.rsvp);
    const user = useSelector((store) => store.user);
    const [notes, setNotes] = useState();
    const [pucks, setPucks] = useState();
    const [tutor, setTutor] = useState();
    const [drinks, setDrinks] = useState();

    const sendRsvp = (event) => {
        event.preventDefault();
        // Sending RSVP info to RSVP table
        dispatch ({ type: 'RSVP', payload: {
            pucks: pucks,
            tutor: tutor,
            drinks: drinks
        } 
        });
        // Sending notes to event table to add to event
        dispatch ({ type: 'RSVP_NOTES', payload: {
            id: eventId,
            notes: notes }
            });
    }

// STYLING
    const Item = styled(Paper)(({ theme }) => ({
        padding: theme.spacing(1),
        borderColor: '#7599BD',
        borderStyle: 'solid',
        borderWidth: '1px',
    }));

    return(
        <div>
        { 
            details.length === 0 ? (
            <div>
            <Loading />
            </div>
        ) : (
            <Box 
                className="details"
                component='form'
                display='flex'
                flexDirection='column'
                justifyContent='center'
                alignContent='center'
                onSubmit={sendRsvp}>
            {/* PostgreSQL pulls all RSVPs for one event
            Adding data to the page by pulling the info from the first event in the array
            All event details in the array are the same, but the event is multiplied by the number of RSVPs */}
                <Item 
                    key={details[0].id}
                    display='flex'
                    flexDirection='column'>
                <Grid>
                    <Box
                        display='flex'
                        flexDirection='column'
                        alignItems='center'
                        padding='5px'>
                        <Typography variant='h4'>RSVP</Typography>
                        <Typography variant='h6'>{ details[0].type ? 'Pickup' : 'Open Skate' } - { details[0].rink }</Typography>
                        <Typography variant="subtitle1">{new Date(details[0].date).toLocaleDateString('en-us', { weekday:"long", month:"short", day:"numeric"})} - {details[0].time} - {details[0].duration} mins</Typography>
                        <RsvpToggle eventId={details[0].id} />
                        <PlayerToggle />
                    </Box>
                    <Box
                        display='flex'
                        flexDirection='column'
                        alignItems='center'
                        padding='5px'>
                        <Typography variant='h5'>Bringing:</Typography>
                        <Stack
                            direction="row"
                            marginLeft="40px">
                            <Stack 
                                direction="column">
                                <FormControlLabel 
                                    value="pucks"
                                    checked={pucks}
                                    control={<Checkbox />} 
                                    onChange={() => {setPucks}} />
                                <FormControlLabel 
                                    value="tutor"
                                    checked={tutor}
                                    control={<Checkbox />} 
                                    onChange={() => {setTutor}} />
                                <FormControlLabel 
                                    value="drinks"
                                    checked={drinks}
                                    control={<Checkbox />} 
                                    onChange={() => {setDrinks}} />
                            </Stack>
                            <Stack 
                            // THIS IS TOO BIG; resize once functional
                                direction="column"
                                spacing={1.3}
                                marginTop={.7} >
                                <Typography variant='h6'>Pucks</Typography>
                                <Typography variant='h6'>Shooter tutor</Typography>
                                <Typography variant='h6'>Drinks</Typography>
                            </Stack>
                        </Stack>
                    </Box>
                    <Box
                        display='flex'
                        flexDirection='column'
                        alignItems='center'
                        padding='5px'>
                        <Typography>Notes:</Typography>
                        <Card
                            sx={{ 
                                maxWidth: '80vw', 
                                backgroundColor: '#fff', 
                                color: 'primary.light',
                                margin:'auto', 
                                minHeight: '10vh',
                                width: '70vw', 
                                padding:'5px',
                                textAlign: 'center',
                                alignContent: 'center'
                                }}>
                            <TextField
                                sx={{ backgroundColor: "fff" }}
                                type="text"
                                name="notes"
                                variant="outlined"
                                fullWidth
                                label="Add notes"
                                value={notes}
                                onChange={(event) => setNotes(event.target.value)}
                            />
                        </Card>
                    </Box>
                </Grid>
                <Box
                    display='flex'
                    flexDirection='row'
                    justifyContent='center'
                    gap={1}
                    margin='10px'>
                    <Button 
                    type="submit" 
                    variant="contained"
                    name="register"
                    value="Register">
                    Register
                    </Button>
                </Box>
                </Item>
            </Box>
        )}
        <Box
            width='100vw'
            position='absolute'
            bottom='0'>
            <Footer />
        </Box>
        </div>
    )
}

export default RSVP;