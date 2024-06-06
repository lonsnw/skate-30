import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// MUI imports
import { styled } from '@mui/material/styles';
import { Box, Card, Grid, Link, Paper, Stack, Switch, Typography } from '@mui/material';

// CUSTOM COMPONENTS
import Footer from '../Footer/Footer';
import GoogleMap from '../GoogleMap/GoogleMap';
import Loading from '../Loading/Loading';


function Details(){

    const history = useHistory();
    const details = useSelector(store => store.details.details);
    const user = useSelector((store) => store.user);

    const handleChange = () => {
        {/* If no user is logged in, do this */}
        {!user.id && (history.push(`/login`))}
        {/* If a user is logged in, do this */}
        // NEEDS TO BE UPDATED
        {user.id && (history.push(`/home`))}
      };

// STYLING
    const Item = styled(Paper)(({ theme }) => ({
        padding: theme.spacing(1),
        borderColor: '#7599BD',
        borderStyle: 'solid',
        borderWidth: '1px',
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
                        <Stack 
                            direction="row" 
                            spacing={1} >
                            <Typography>No</Typography>
                            <AntSwitch 
                                inputProps={{ 'aria-label': 'ant design' }} 
                                onChange={handleChange} />
                            <Typography>Yes</Typography>
                        </Stack>
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
                                <Link href="/login">Log in</Link> to see more information.
                            </Card>
                        </div>
                        )}
                        {/* If a user is logged in, do this */}
                        {user.id && (
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
                                <div key={event.id} >
                                    <Typography variant="p1">{event.attendees}</Typography>
                                </div>
                                );
                            })}
                        </Card>
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