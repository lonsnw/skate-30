import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './EventCard.css'

// MUI imports
import { styled } from '@mui/material/styles';
import { Card, CardContent, Icon, Paper, Typography } from '@mui/material';

function EventCard() {
    const dispatch = useDispatch();
    const events = useSelector((store) => store.browse.browseAll);
    const history = useHistory();

  // sending event ID to saga to load when details page opens
    const getID = (eventId) => {
        dispatch({ type: 'FETCH_DETAILS', payload: eventId });
        console.log(eventId);
        history.push('/details')
    }

  const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    borderStyle: 'solid',
    textAlign: 'left',
  }));

    return(
        <Item className="events">
            <Typography variant="h6"> <li>Pickup - Augsburg A </li></Typography>
            <Typography variant="subtitle1">Monday, June 3 - 8:30PM - 90 mins</Typography>
            <Typography variant="subtitle2">3 Skaters | 1 Goalie</Typography>
        </Item>
        
        // {events.map(movie => {
        //     return (
                // <Item key={event.id}>
                //     <Typography variant="h6"> <li>Pickup - {event.rink} </li></Typography>
                //     <Typography variant="subtitle1">Monday, June 3 - {event.time} - {event.duration} mins</Typography>
                //     <Typography variant="subtitle2">3 Skaters | 1 Goalie</Typography>
                // </Item>
        //       <Card 
        //         key={event.id} 
        //         sx={{ bgcolor: "secondary", padding: 3, width: 240 }}>
        //           <Stack 
        //             direction="column" 
        //             justifyContent="space-evenly" 
        //             alignItems="center" 
        //             spacing={2}>
        //                 <CardContent>
        //                     <Typography variant="h6">{event.rink}</Typography>
        //                 </CardContent>
        //           </Stack>
        //       </Card>
        //     );
        // })}
    )
}

export default EventCard;