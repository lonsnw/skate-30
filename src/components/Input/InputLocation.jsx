import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// MUI imports
import { styled } from '@mui/material/styles';
import { Box, Button, Grid, Paper, Stack, Switch, TextField, Typography } from '@mui/material';

// CUSTOM COMPONENTS
import Footer from '../Footer/Footer';
import Loading from '../Loading/Loading';

function InputLocation(){
    const dispatch = useDispatch();
    const history = useHistory();
    const [rink, setRink] = useState('');
    const [address, setAddress] = useState('');
    const [notes, setNotes] = useState('');
    const [type, setType] = useState(false);
    const [level, setLevel] = useState(false);
    const [exposure, setExposure] = useState(false);

    const addLocation = () => {
        dispatch({ type: 'ADD_EVENT', payload: {
            rink: rink, 
            address: address, 
            notes: notes, 
            type: type, 
            level: level,
            exposure: exposure,
        } });
        history.push('/input/date');
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
            <Box
                component='form'
                onSubmit={addLocation}>
                <Item 
                    className="rsvp">
                {/* PostgreSQL pulls all RSVPs for one event
                Adding data to the page by pulling the info from the first event in the array
                All event details in the array are the same, but the event is multiplied by the number of RSVPs */}
                    <Grid>
                        <Box
                            display='flex'
                            flexDirection='column'
                            alignItems='center'
                            padding='5px'
                            width='80vw'
                            margin='auto'>
                            <Typography variant='h4'>Add a new event</Typography>
                            <Typography variant='h5'>Location:</Typography>
                                <Typography variant="p1">Rink</Typography>            
                                <TextField
                                    sx={{ backgroundColor: "#eef2f7" }}
                                    type="text"
                                    name="rink"
                                    required
                                    variant="outlined"
                                    fullWidth
                                    label="Rink"
                                    value={rink}
                                    onChange={(event) => setRink(event.target.value)}
                                />
                                <Typography variant="p1">Address</Typography>            
                                <TextField
                                    sx={{ backgroundColor: "#eef2f7" }}
                                    type="text"
                                    name="address"
                                    required
                                    variant="outlined"
                                    fullWidth
                                    label="Address"
                                    value={address}
                                    onChange={(event) => setAddress(event.target.value)}
                                />
                                <Typography variant="p1">Notes</Typography>            
                                <TextField
                                    sx={{ backgroundColor: "#eef2f7" }}
                                    type="text"
                                    name="notes"
                                    required
                                    variant="outlined"
                                    fullWidth
                                    label="Notes"
                                    value={notes}
                                    onChange={(event) => setNotes(event.target.value)}
                                />
                            <Stack 
                                direction="column"
                                spacing={1.1}
                                marginTop={1.4} >
                                <Stack 
                                    direction="row" 
                                    paddingLeft='22px'
                                    spacing={1} >
                                    <Typography>Pickup</Typography>
                                    <AntSwitch 
                                        checked={type}
                                        onChange={() => {setType(!type)}} />
                                    <Typography>Free skate</Typography>
                                </Stack>
                                <Stack 
                                    direction="row" 
                                    paddingLeft='6px'
                                    spacing={1} >
                                    <Typography>Beginner</Typography>
                                    <AntSwitch 
                                        checked={level}
                                        onChange={() => {setLevel(!level)}} />
                                    <Typography>Advanced</Typography>
                                </Stack>
                                <Stack 
                                    direction="row" 
                                    paddingLeft='24px'
                                    spacing={1} >
                                    <Typography>Indoor</Typography>
                                    <AntSwitch 
                                        checked={exposure}
                                        onChange={() => {setExposure(!exposure)}} />
                                    <Typography>Outdoor</Typography>
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
                            name="next"
                            value="Next">
                            Next
                        </Button>
                    </Box>
                </Item>
            </Box>
        <Box
            width='100vw'
            position='absolute'
            bottom='0'>
            <Footer />
        </Box>
        </div>
    )
}

export default InputLocation;