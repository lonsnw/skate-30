import React, { useState } from 'react';
import { useSelector } from 'react-redux';

// MUI imports
import { styled } from '@mui/material/styles';
import { Box, Card, FormControlLabel, Grid, Paper, Radio, Stack, TextField, Typography } from '@mui/material';

// CUSTOM COMPONENTS
import Footer from '../Footer/Footer';
import GoogleMap from '../GoogleMap/GoogleMap';
import Loading from '../Loading/Loading';
import PlayerToggle from '../PlayerToggle/PlayerToggle'
import RsvpToggle from '../RsvpToggle/RsvpToggle'

function RSVP(){
    const details = useSelector(store => store.details.details);
    const user = useSelector((store) => store.user);
    const [notes, setNotes] = useState();
    const [pucks, setPucks] = useState();
    const [tutor, setTutor] = useState();
    const [drinks, setDrinks] = useState();

    const handlePucks = () => {

    };

    const handleTutor = () => {

    };

    const handleDrinks = () => {

    };

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
            <Grid className="details">
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
                            direction="row">
                            <Stack 
                                direction="column">
                                <FormControlLabel 
                                    value="pucks"
                                    control={<Radio />} />
                                <FormControlLabel 
                                    value="pucks"
                                    control={<Radio />} />
                                <FormControlLabel 
                                    value="pucks"
                                    control={<Radio />} />
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
                </Item>
            </Grid>
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