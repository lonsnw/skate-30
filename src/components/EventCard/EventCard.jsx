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
        // <Item className="events">
        //     <Typography variant="h6"> <li>Pickup - Augsburg A </li></Typography>
        //     <Typography variant="subtitle1">Monday, June 3 - 8:30PM - 90 mins</Typography>
        //     <Typography variant="subtitle2">3 Skaters | 1 Goalie</Typography>
        // </Item>
        <div>
            {events.map(event => {
                return (
                    <Item 
                        key={event.id}
                        onClick={() => {getID(event.id)}} >
                        <Typography variant="h6"> <li>{event.type ? 'Pickup' : 'Open Skate'} - {event.rink} </li></Typography>
                        <Typography variant="subtitle1">{new Date(event.date).toLocaleDateString('en-us', { weekday:"long", month:"short", day:"numeric"})} - {event.time} - {event.duration} mins</Typography>
                        <Typography variant="subtitle2">3 Skaters | 1 Goalie</Typography>
                    </Item>
                );
            })}
        </div>
    )
}

export default EventCard;