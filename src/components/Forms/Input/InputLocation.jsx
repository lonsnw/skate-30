import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// MUI imports
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

// Custom styling imports
import { CustomInput, CustomLabel, CustomSwitch } from '../Styles/Styles';

// CUSTOM COMPONENTS
import Footer from '../Footer/Footer';

function InputLocation(){
    const dispatch = useDispatch();
    const history = useHistory();
    const [rink, setRink] = useState('');
    const [address, setAddress] = useState('');
    const [notes, setNotes] = useState('');
    const [type, setType] = useState(false);
    const [level, setLevel] = useState(false);
    const [exposure, setExposure] = useState(false);

    const addLocation = (event) => {
        event.preventDefault();
        console.log('in addLocation');
        // require data to submit
        if (rink && address){
            dispatch({ type: 'ADD_EVENT', payload: {
                rink: rink, 
                address: address, 
                notes: notes, 
                type: type, 
                level: level,
                exposure: exposure,
            } });
            history.push('/input/date');
        } else {
            alert('Rink name and location are required.')
        }
    }

    return(
        <div>
            <Box 
                component='form'
                onSubmit={addLocation}
                className="top-margin-and-scroll">
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
                            paddingLeft='30px'
                            spacing={1} >
                            <CustomLabel>
                                <Typography>Pickup</Typography>
                                <CustomInput 
                                type='checkbox'
                                checked={type}
                                onChange={() => {setType(!type)}} />
                                <CustomSwitch />
                                <Typography>Free skate</Typography>
                            </CustomLabel>
                        </Stack>
                        <Stack 
                            direction="row" 
                            paddingLeft='14px'
                            spacing={1} >
                            <CustomLabel>
                                <Typography>Beginner</Typography>
                                <CustomInput 
                                type='checkbox'
                                checked={level}
                                onChange={() => {setLevel(!level)}} />
                                <CustomSwitch />
                                <Typography>Advanced</Typography>
                            </CustomLabel>
                        </Stack>
                        <Stack 
                            direction="row" 
                            paddingLeft='32px'
                            spacing={1} >
                            <CustomLabel>
                                <Typography>Indoor</Typography>
                                <CustomInput 
                                type='checkbox'
                                checked={exposure}
                                onChange={() => {setExposure(!exposure)}} />
                                <CustomSwitch />
                                <Typography>Outdoor</Typography>
                            </CustomLabel>
                        </Stack>
                    </Stack>
                </Box>
                <Box
                    display='flex'
                    justifyContent='center'
                    margin='10px'>
                    <Button 
                        type="submit"
                        variant="contained"
                        name="next"
                        value="Next">
                        Next
                    </Button>
                </Box>
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