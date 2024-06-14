import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import dayjs from 'dayjs';

// MUI imports
import { Box, Button, Grid, Paper, Stack, Switch, TextField, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimeField } from '@mui/x-date-pickers/TimeField';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

// CUSTOM COMPONENTS
import Footer from '../Footer/Footer';

function InputDate(){
    const dispatch = useDispatch();
    const history = useHistory();
    const [date, setDate] = useState('');
    const [dateAndTime, setDateAndTime] = useState(null);
    const [time, setTime] = useState('');
    const [duration, setDuration] = useState('');

    // const handleDate = (newDate) => {
    //     setDate(new Date("YYYY-MM-DD"));
    //     console.log('date:', date)
    // }

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
                <Paper 
                    className="rsvp">
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
                            <Typography variant='h4'>Add a new event</Typography>
                            <Typography variant='h5'>Date and time:</Typography>
                            <Typography variant="p1">Enter a date and time</Typography>
                            <TextField
                                sx={{ backgroundColor: "#eef2f7" }}
                                type="text"
                                name="date"
                                required
                                variant="outlined"
                                fullWidth
                                label="Date: YYYY/MM/DD"
                                value={date}
                                onChange={(event) => setDate(event.target.value)}
                            />
                            <TextField
                                sx={{ backgroundColor: "#eef2f7" }}
                                type="text"
                                name="time"
                                required
                                variant="outlined"
                                fullWidth
                                label="Time: HH:MM"
                                value={time}
                                onChange={(event) => setTime(event.target.value)}
                            />
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

export default InputDate;