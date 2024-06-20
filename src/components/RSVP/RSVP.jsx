import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// MUI imports
import { Box, Button, Checkbox, FormControlLabel, Grid, Stack, Typography } from '@mui/material';

// Custom styling imports
import { CustomInput, CustomLabel, CustomSwitch, SolidWrap } from '../Styles/Styles'

// CUSTOM COMPONENTS
import Footer from '../Footer/Footer';
import Loading from '../Loading/Loading';
import RsvpDetails from '../RsvpDetails/RsvpDetails';

function RSVP(){
    const dispatch = useDispatch();
    const history = useHistory();
    const details = useSelector(store => store.details.details);
    const rsvp = useSelector(store => store.rsvp.rsvp);
    const [position, setPosition] = useState(false);
    const [pucks, setPucks] = useState(false);
    const [tutor, setTutor] = useState(false);
    const [drinks, setDrinks] = useState(false);

    const sendRsvp = (event) => {
        console.log('testing1');
        event.preventDefault();
        console.log('event:', details[0].id);
        // Sending RSVP info to RSVP table
        dispatch ({ type: 'RESPOND_SVP', payload: {
            event_id: details[0].event_id,
            position: position,
            pucks: pucks,
            tutor: tutor,
            drinks: drinks,
        },} );
        // Redirect to browse after submitting RSVP
        history.push('/browse/schedule');
    }

    return(
        <div>
        { 
            rsvp.rsvp_id > 0 ? (
            <RsvpDetails />
        ) : ( (details[0].length === 0 ? (
            <Loading />
        ) : (
            <Box
                component='form'
                onSubmit={sendRsvp}>
                <SolidWrap 
                    className="top-margin-and-scroll">
                {/* PostgreSQL pulls all RSVPs for one event
                Adding data to the page by pulling the info from the first event in the array
                All event details in the array are the same, but the event is multiplied by the number of RSVPs */}
                    <Grid>
                        <Box
                            display='flex'
                            flexDirection='column'
                            alignItems='center'
                            padding='5px'>
                            <Typography variant='h4'>RSVP</Typography>
                            <Typography variant='h6'>{ details[0].type ? 'Open skate' : 'Pickup' } - { details[0].rink }</Typography>
                            <Typography variant="subtitle1">{new Date(details[0].date).toLocaleDateString('en-us', { weekday:"long", month:"short", day:"numeric"})} - {details[0].time} - {details[0].duration} mins</Typography>
                            <Stack 
                                direction="row" 
                                paddingRight='6px'
                                spacing={1} >
                                <CustomLabel>
                                    <Typography>Skater</Typography>
                                    <CustomInput 
                                        type='checkbox'
                                        checked={position}
                                        onChange={() => {setPosition(!position)}} />
                                    <CustomSwitch />
                                    <Typography>Goalie</Typography>
                                </CustomLabel>
                            </Stack>
                        </Box>
                        <Box
                            display='flex'
                            flexDirection='column'
                            alignItems='center'>
                            <Typography variant='h6'>Bringing:</Typography>
                            <Stack
                                direction="row">
                                <Stack 
                                    direction="column"
                                    spacing={-0.5}>
                                    <FormControlLabel 
                                        value="pucks"
                                        checked={pucks}
                                        control={<Checkbox />} 
                                        onChange={() => {setPucks(true)}} />
                                    <FormControlLabel 
                                        value="tutor"
                                        checked={tutor}
                                        control={<Checkbox />} 
                                        onChange={() => {setTutor(true)}} />
                                    <FormControlLabel 
                                        value="drinks"
                                        checked={drinks}
                                        control={<Checkbox />} 
                                        onChange={() => {setDrinks(true)}} />
                                </Stack>
                                <Stack 
                                    direction="column"
                                    spacing={1.1}
                                    marginTop={1.4} >
                                    <Typography variant='p1'>Pucks</Typography>
                                    <Typography variant='p1'>Shooter
                                    <br />tutor</Typography>
                                    <Typography variant='p1'>Drinks</Typography>
                                </Stack>
                            </Stack>
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
                </SolidWrap>
            </Box>
        )))}
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