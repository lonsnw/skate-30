import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// MUI imports
import { Box, Button, Grid, Paper, Stack, Switch, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

// CUSTOM COMPONENTS
import Footer from '../Footer/Footer';
import ScreenItem from '../ScreenItem/ScreenItem';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';

function InputLocation(){
    const dispatch = useDispatch();
    const history = useHistory();
    const [rink, setRink] = useState();
    const [address, setAddress] = useState();
    const [notes, setNotes] = useState();
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

    return(
        <div>
            <Box
                component='form'
                onSubmit={addLocation}>
                <Paper 
                    className="rsvp"
                    borderColor='#7599BD'
                    borderStyle='solid'
                    borderWidth='1px'>
                {/* PostgreSQL pulls all RSVPs for one event
                Adding data to the page by pulling the info from the first event in the array
                All event details in the array are the same, but the event is multiplied by the number of RSVPs */}
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
                                    <ToggleSwitch 
                                        checked={type}
                                        onChange={() => {setType(!type)}} />
                                    <Typography>Free skate</Typography>
                                </Stack>
                                <Stack 
                                    direction="row" 
                                    paddingLeft='6px'
                                    spacing={1} >
                                    <Typography>Beginner</Typography>
                                    <ToggleSwitch 
                                        checked={level}
                                        onChange={() => {setLevel(!level)}} />
                                    <Typography>Advanced</Typography>
                                </Stack>
                                <Stack 
                                    direction="row" 
                                    paddingLeft='24px'
                                    spacing={1} >
                                    <Typography>Indoor</Typography>
                                    <ToggleSwitch 
                                        checked={exposure}
                                        onChange={() => {setExposure(!exposure)}} />
                                    <Typography>Outdoor</Typography>
                                </Stack>
                            </Stack>
                        </Box>
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
                </Paper>
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