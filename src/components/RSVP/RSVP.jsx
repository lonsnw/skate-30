import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// MUI imports
import { styled } from '@mui/material/styles';
import { Box, Button, Card, CardContent, Checkbox, FormControlLabel, Grid, Paper, Stack, Switch, TextField, Typography } from '@mui/material';

// CUSTOM COMPONENTS
import Footer from '../Footer/Footer';
import Loading from '../Loading/Loading';

function RSVP(){
    const dispatch = useDispatch();
    const details = useSelector(store => store.details.details);
    const user = useSelector((store) => store.user);
    const [notes, setNotes] = useState();
    const [attend, setAttend] = useState(true);
    const [position, setPosition] = useState(false);
    const [pucks, setPucks] = useState();
    const [tutor, setTutor] = useState();
    const [drinks, setDrinks] = useState();

    const sendRsvp = (event) => {
        event.preventDefault();
        {
            attend === false ? (
                // DELETE if RSVP is no
                dispatch ({ type: 'DELETE_RSVP', payload: tutor })
            ) : (
                // Sending RSVP info to RSVP table
                dispatch ({ type: 'RESPOND_SVP', payload: {
                    attending: attend,
                    position: position,
                    pucks: pucks,
                    tutor: tutor,
                    drinks: drinks
                }} )
        )};
        // Sending notes to event table to add to event
        dispatch ({ type: 'RSVP_NOTES', payload: {
            notes: notes }
            });
    }

    useEffect(() => {
        console.log('user id:', user.id);
    }, []);

    const handleAttend = () => {
        setAttend();
    }

    const handlePosition = () => {
        setPosition();
    }

// STYLING
    const Item = styled(Paper)(({ theme }) => ({
        padding: theme.spacing(1),
        borderColor: '#7599BD',
        borderStyle: 'solid',
        borderWidth: '1px',
        marginTop: '50px',
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
            details.length === 0 ? (
            <div>
            <Loading />
            </div>
        ) : (
            <Box>
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
                            <Stack 
                                direction="row" 
                                spacing={1} >
                                <Typography>No</Typography>
                                <AntSwitch 
                                    checked={attend}
                                    onChange={() => {handleAttend()}} />
                                <Typography>Yes</Typography>
                            </Stack>
                            <Stack 
                                direction="row" 
                                paddingRight='6px'
                                spacing={1} >
                                <Typography>Skater</Typography>
                                <AntSwitch 
                                    checked={position}
                                    onChange={() => {handlePosition()}} />
                                <Typography>Goalie</Typography>
                            </Stack>
                        </Box>
                        <Box
                            display='flex'
                            flexDirection='column'
                            alignItems='center'
                            padding='5px'>
                            <Typography variant='h6'>Bringing:</Typography>
                            <Stack
                                direction="row"
                                marginLeft="40px">
                                <Stack 
                                    direction="column"
                                    spacing={-0.5}>
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
                                    spacing={1.1}
                                    marginTop={1.4} >
                                    <Typography variant='p1'>Pucks</Typography>
                                    <Typography variant='p1'>Shooter
                                    <br />tutor</Typography>
                                    <Typography variant='p1'>Drinks</Typography>
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
                                <CardContent>
                                    { details[0].notes }
                                </CardContent>
                                <TextField
                                    sx={{ backgroundColor: "fff"}}
                                    type="text"
                                    name="notes"
                                    variant="outlined"
                                    label="Add more notes"
                                    fullWidth
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