import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// MUI imports
import { styled } from '@mui/material/styles';
import { Box, Button, Checkbox, FormControlLabel, Grid, Paper, Stack, Switch, Typography } from '@mui/material';

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
        history.push('/schedule');
    }

// STYLING
    const Item = styled(Paper)(({ theme }) => ({
        padding: theme.spacing(1),
        borderColor: '#7599BD',
        borderStyle: 'solid',
        borderWidth: '1px',
        height: '74vh',
    }));

    const AntSwitch = styled(Switch)(({ theme }) => ({
        width: 36,
        height: 20,
        padding: 0,
        borderRadius: 20,
        display: 'flex',
        '&:active': {
        '& .MuiSwitch-thumb': {
            width: 15,
        },
        '& .MuiSwitch-switchBase.Mui-checked': {
            transform: 'translateX(9px)',
        },
        },
        '& .MuiSwitch-switchBase': {
        padding: 2,
        '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
            opacity: 1,
            backgroundColor: 'primary',
    },
        },
        },
        '& .MuiSwitch-thumb': {
        boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
        width: 16,
        height: 16,
        borderRadius: 20,
        transition: theme.transitions.create(['width'], {
            duration: 200,
        }),
        },
        '& .MuiSwitch-track': {
        borderRadius: 16 / 2,
        opacity: 1,
        backgroundColor: '#97b3ce',
        boxSizing: 'border-box',
        },
    }));

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
                <Box 
                    className="rsvp">
                {/* PostgreSQL pulls all RSVPs for one event
                Adding data to the page by pulling the info from the first event in the array
                All event details in the array are the same, but the event is multiplied by the number of RSVPs */}
                    <Item >
                    <Grid>
                        <Box
                            display='flex'
                            flexDirection='column'
                            alignItems='center'
                            padding='5px'>
                            <Typography variant='h4'>RSVP</Typography>
                            <Typography variant='h6'>{ details[0].type ? 'Pickup' : 'Open Skate' } - { details[0].rink }</Typography>
                            <Typography variant="subtitle1">{new Date(details[0].date).toLocaleDateString('en-us', { weekday:"long", month:"short", day:"numeric"})} - {details[0].time} - {details[0].duration} mins</Typography>
                            <Stack 
                                direction="row" 
                                paddingRight='6px'
                                spacing={1} >
                                <Typography>Skater</Typography>
                                <AntSwitch 
                                    checked={position}
                                    onChange={() => {setPosition(!position)}} />
                                <Typography>Goalie</Typography>
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
                    </Item>
                </Box>
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