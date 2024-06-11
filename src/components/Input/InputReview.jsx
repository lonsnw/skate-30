import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// MUI imports
import { styled } from '@mui/material/styles';
import { Box, Button, Card, Grid, Paper, Stack, Typography } from '@mui/material';

// CUSTOM COMPONENTS
import Footer from '../Footer/Footer';
import GoogleMap from '../GoogleMap/GoogleMap';


function InputReview(){
    const dispatch = useDispatch();
    const history = useHistory();
    const input = useSelector(store => store.input);

    useEffect(() => {
        console.log(input)
    }, []);

    const handleClick = () => {
        dispatch({ type: 'ADD_EVENT', payload: {
            rink: input.rink, 
            address: input.address, 
            notes: input.notes, 
            type: input.type, 
            level: input.level,
            exposure: input.exposure,
            date: input.date, 
            time: input.time, 
            duration: input.duration, 
        } });
        // STRETCH: send to details page for the event; this will require refactoring
        // as the details page currently gets its event id from the EventCard,
        // and there's nowhere to pull the event id here because it's a new event.
        history.push('/browse');
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
            <Box
                component='form'
                marginTop='30px'
                className="events"
                onSubmit={handleClick}>
                <Item >
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
                            <Typography variant='h4'>Review your event</Typography>
                            <Typography variant='h5'>Location:</Typography>
                            <Typography variant="h6">{input.rink}</Typography>            
                            <Item>
                                <Stack 
                                    direction="column" 
                                    spacing={1} 
                                    alignItems="center">
                                    <GoogleMap />
                                    {input.address}
                                </Stack>
                            </Item>            
                            <Typography variant="h6">Notes:</Typography> 
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
                                {input.notes}</Card>           
                            <Typography variant='h6'>Date and time:</Typography>
                            <Item>
                                {input.date}
                                {input.time}
                                {input.duration} minutes
                            </Item>
                            <Typography variant="h6">Other details:</Typography>
                            <Stack 
                                direction="column"
                                spacing={1.1}
                                marginTop={1.4}>
                                <li>{input.type ? 'Free skate' : 'Pickup'}</li>
                                <li>{input.level ? 'Advanced' : 'Beginner'}</li>
                                <li>{input.exposure ? 'Outdoor' : 'Indoor'}</li>
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
                            type="button"
                            variant="contained"
                            color="secondary"
                            name="cancel"
                            onClick={() => {history.push('/browse');}}>
                            Cancel
                        </Button>
                        <Button 
                            type="submit" 
                            variant="contained"
                            name="add_event"
                            value="Add event">
                            Add event
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

export default InputReview;