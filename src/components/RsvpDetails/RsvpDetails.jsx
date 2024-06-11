import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// MUI imports
import { styled } from '@mui/material/styles';
import { Box, Button, Card, CardContent, Checkbox, FormControlLabel, Grid, Paper, Stack, Switch, TextField, Typography } from '@mui/material';

// CUSTOM COMPONENTS
import Footer from '../Footer/Footer';

function RSVP(){
    const dispatch = useDispatch();
    const rsvp = useSelector(store => store.rsvp.rsvp);
    const rsvpId = rsvp.rsvp_id;
    const history = useHistory();

    const deleteRsvp = (rsvpId) => {
        dispatch ({ type: 'DELETE_SVP', payload: rsvpId });
        history.push('/browse')
    }

    const newRsvp = (rsvpId) => {
        // Deletes RSVP and refreshes page to pull the other version of thr RSVP page
        dispatch ({ type: 'DELETE_SVP', payload: rsvpId });
        history.push(`/rsvp/${rsvpId}`)
    }

// STYLING
    const Item = styled(Paper)(({ theme }) => ({
        padding: theme.spacing(1),
        borderColor: '#7599BD',
        borderStyle: 'solid',
        borderWidth: '1px',
        marginTop: '50px',
    }));

    return(
        <div >
            <Box 
                component='form'
                display='flex'
                flexDirection='column'
                justifyContent='center'
                alignContent='center'
                marginTop='20px'>
                <Grid>
                    <Box
                        display='flex'
                        flexDirection='column'
                        alignItems='center'
                        padding='5px'>
                        <Typography variant='h4'>RSVP</Typography>
                        <Typography variant='h6'>{ rsvp.type ? 'Pickup' : 'Open Skate' } - { rsvp.rink }</Typography>
                        <Typography variant="subtitle1">{new Date(rsvp.date).toLocaleDateString('en-us', { weekday:"long", month:"short", day:"numeric"})} - {rsvp.time} - {rsvp.duration} mins</Typography>
                    </Box>
                    <Box
                        display='flex'
                        flexDirection='column'
                        alignItems='center'
                        padding='5px'>
                        <Typography variant='h6'>Your RSVP:</Typography>
                        <Typography variant='p1'>You've registered as a {rsvp.position ? 'goalie' : 'skater'}. </Typography>
                        <Typography variant='p1'>{rsvp.pucks ? `You're bringing pucks.` : ''} </Typography>
                        <Typography variant='p1'>{rsvp.tutor ? `You're bringing a shooter tutor.` : ''} </Typography>
                        <Typography variant='p1'>{rsvp.drinks ? `You're bringing drinks.` : ''} </Typography>
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
                                { rsvp.notes }
                            </CardContent>
                        </Card>
                    </Box>
                </Grid>
            </Box>
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
                    name="Remove"
                    onClick={() => deleteRsvp(rsvpId)} >
                    Remove me
                </Button>
                <Button 
                    type="button"
                    variant="contained"
                    name="register"
                    onClick={() => newRsvp(rsvp.event_id)} >
                    Change my RSVP
                </Button>
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

export default RSVP;