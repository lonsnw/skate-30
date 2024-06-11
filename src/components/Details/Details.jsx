import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// MUI imports
import { styled } from '@mui/material/styles';
import { Box, Card, Grid, Link, Paper, Stack, Switch, Typography } from '@mui/material';

// CUSTOM COMPONENTS
import Footer from '../Footer/Footer';
import GoogleMap from '../GoogleMap/GoogleMap';
import Loading from '../Loading/Loading';
import DetailRsvpToggle from '../DetailRsvpToggle/DetailRsvpToggle'

function Details(){
    const details = useSelector(store => store.details.details);
    const user = useSelector((store) => store.user);

    console.log('DEEETS', details);
    console.log('test')

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
                    <Item >
                        {/* On load, it sometimes throws an error that .type isn't recognized; if I comment out and then let it load, it works and I can comment it back in. */}
                        <Typography variant='h6'><li>{ details[0].type ? 'Pickup' : 'Open Skate' } - { details[0].rink }</li></Typography>
                        <Typography variant="subtitle1">{new Date(details[0].date).toLocaleDateString('en-us', { weekday:"long", month:"short", day:"numeric"})} - {details[0].time} - {details[0].duration} mins</Typography>
                    </Item>
                    <Box
                        display='flex'
                        flexDirection='column'
                        alignItems='center'
                        padding='5px'>
                        <Typography variant='h6'>RSVP</Typography>
                        <DetailRsvpToggle eventId={details[0].event_id} />
                    </Box>
                    <Item>
                        <Stack 
                            direction="column" 
                            spacing={1} 
                            alignItems="center">
                            <Typography variant='subtitle1'>Address</Typography>
                            <GoogleMap />
                            { details[0].address }
                        </Stack>
                    </Item>
                    <Box
                        display='flex'
                        flexDirection='column'
                        alignItems='center'
                        padding='5px'>
                        <Typography>Skill level: { details[0].level ? 'Advanced' : 'Beginner' }</Typography>
                        <Typography> { details[0].exposure ? 'Outdoor' : 'Indoor' } </Typography>
                    {/* Mapping through RSVPs to get the names of attendees if a user is authenticated */}
                    </Box>
                    <Box
                        display='flex'
                        flexDirection='column'
                        alignItems='center'
                        padding='5px'>
                        <Typography>Who's going:</Typography>
                        {/* If no user is logged in, do this */}
                        {!user.id && (
                        <div>
                            {/* Conditional rendering: if there's an "rsvp_id" (i.e. an entry in the RSVP table),
                            then this will show the details.length as an RSVP.  Otherwise it shows 0.  This is to 
                            prevent the length being counted as an auto-rsvp because there is an entry for every event
                            regardless of RSVPs. */}
                            {!details[0].rsvp_id ? (
                                <Card
                                sx={{  
                                backgroundColor: '#baccde', 
                                color: 'primary',
                                margin:'auto', 
                                minHeight: '10vh', 
                                padding:'5px',
                                textAlign: 'center',
                                alignContent: 'center'
                                }}>
                                0 RSVP(s).
                                <br />
                                <Link href="/login">Log in</Link> to see more information.
                            </Card>
                            ) : (
                                <Card
                                sx={{  
                                backgroundColor: '#baccde', 
                                color: 'primary',
                                margin:'auto', 
                                minHeight: '10vh', 
                                padding:'5px',
                                textAlign: 'center',
                                alignContent: 'center'
                                }}>
                                { details.length } RSVP(s).
                                <br />
                                {/* Added # to link here because it was redirecting Home instead without # */}
                                <Link href="#/login">Log in</Link> to see more information.
                            </Card>
                            ) }  
                        </div>
                        )}
                        {/* If a user is logged in, do this */}
                        {user.id && (
                            <div>
                                {!details.event_id ? (
                                <Card
                                sx={{  
                                backgroundColor: '#baccde', 
                                color: 'primary',
                                margin:'auto', 
                                minHeight: '10vh', 
                                padding:'5px',
                                textAlign: 'center',
                                alignContent: 'center'
                                }}>
                                No one has signed up yet.
                            </Card>
                            ) : (
                                <Card
                                sx={{  
                                backgroundColor: '#baccde', 
                                color: 'primary',
                                margin:'auto', 
                                minHeight: '10vh',
                                minWidth: '50vw', 
                                padding:'5px',
                                textAlign: 'center',
                                alignContent: 'center'
                                }}>
                                    {details.map(event => {
                                        return (
                                        <div key={event.user_id} >
                                            <Typography variant="p1">{event.attendees}</Typography>
                                        </div>
                                        );
                                    })}
                                </Card>
                            ) }
                            </div>
                        )}
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
                            { details[0].notes }
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

export default Details;