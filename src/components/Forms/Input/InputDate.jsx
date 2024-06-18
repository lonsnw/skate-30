import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import moment from 'moment';

// MUI imports
import { Box, Button, Grid, Stack, TextField, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopTimePicker } from '@mui/x-date-pickers/DesktopTimePicker';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

// Custom styling imports
import { SolidWrap } from '../../Styles/Styles';

// CUSTOM COMPONENTS
import Footer from '../../Basic components/Footer/Footer';

function InputDate(){
    const dispatch = useDispatch();
    const history = useHistory();
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [duration, setDuration] = useState('');

    const handleDate = (newDate) => {
        console.log(moment(newDate._d).format('YYYY/MM/DD'));
        setDate(moment(newDate._d).format('YYYY/MM/DD'));
        console.log('date:', date)
    }

    const handleTime = (newTime) => {
        console.log(moment(newTime._d).format('HH:mm:ss'));
        setTime(moment(newTime._d).format('HH:mm:ss'));
        console.log('time:', time)
    }

    const addDate = (event) => {
        event.preventDefault();
        // require data to submit
        if (date && time && duration){
        dispatch({ type: 'ADD_EVENT', payload: {
                date: date, 
                time: time, 
                duration: duration, 
            } });
            history.push('/input/review');
        } else {
            alert('Date, time, and duration are required.')
        }
    }

    return(
        <div>
            <Box
                component='form'
                onSubmit={addDate}>
                <SolidWrap 
                    className="top-margin-and-scroll">
                {/* PostgreSQL pulls all RSVPs for one event
                Adding data to the page by pulling the info from the first event in the array
                All event details in the array are the same, but the event is multiplied by the number of RSVPs */}
                    <Grid>
                        <Stack
                            display='flex'
                            flexDirection='column'
                            alignItems='center'
                            direction="column"
                            spacing={2}
                            marginTop={1.4}
                            padding='5px'
                            width='80vw'
                            margin='auto'>
                            <Typography variant='h5'>Date and time:</Typography>
                            <LocalizationProvider dateAdapter={AdapterMoment}> 
                                <DatePicker 
                                    label="Choose a date" 
                                    onChange={handleDate} />
                                <DesktopTimePicker 
                                    label="Choose a time" 
                                    onChange={handleTime}/>
                            </LocalizationProvider>
                            <Typography variant="p1">Duration</Typography>            
                            <Box
                                display='flex'
                                flexDirection='row'
                                alignItems='center'
                                gap='10px'
                                padding='5px'
                                width='35vw'
                                margin='auto'>
                                <TextField
                                    sx={{ backgroundColor: "#eef2f7" }}
                                    type="text"
                                    name="duration"
                                    required
                                    variant="outlined"
                                    value={duration}
                                    onChange={(event) => setDuration(event.target.value)}
                                /> 
                                <Typography variant='p1'>minutes</Typography>
                            </Box>
                        </Stack>
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
                </SolidWrap>
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

export default InputDate;