import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './Details.css';

// MUI imports
import { styled } from '@mui/material/styles';
import { Box, Button, Card, CardContent, CardMedia, Chip, Grid, Paper, Typography } from '@mui/material';

// CUSTOM COMPONENTS
import Footer from '../Footer/Footer'

function Details(){

    const history = useHistory();
    const details = useSelector(store => store.details.details);

    const Item = styled(Paper)(({ theme }) => ({
        padding: theme.spacing(1),
        borderColor: '#7599BD',
        borderStyle: 'solid',
        borderWidth: '1px',
        textAlign: 'left',
    }));

    const handleClick = () => {
        history.push('/');
  }

    return(
        <div className="details-page">
            <Item 
            // PostgreSQL pulls all RSVPs for one event
            // Adding data to the page by pulling the info from the first event in the array
            // All event details in the array are the same, but the event is multiplied by the number of RSVPs
                key={details[0].id}
                display='flex'
                flexDirection='column'>
            <Grid className='events'>
                <Grid >
                    <Typography>{ details[0].rink }</Typography>
                </Grid>
            </Grid>
            </Item>
            <Box
                // This maps through the RSVPs to get the names of attendees 
                className="rsvps" >
                {details.map(event => {
                    return (
                    <div key={event.id} className="deets" >
                        <Typography variant="p1">{event.attendees}</Typography>
                    </div>
                    );
                })}
            </Box>
            <Button 
                onClick={() => {handleClick()}} 
                size="large"
                color="secondary" >
                Back
            </Button>
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