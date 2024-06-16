import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// MUI imports
import { Typography } from '@mui/material';

// Custom styling imports
import { ItemCard } from '../Styles/Styles'

function SearchCard() {
    const dispatch = useDispatch();
    const history = useHistory();  
    const events = useSelector((store) => store.search.sendSearch);

    // sending event ID to saga to load when details page opens
    const getID = (eventId) => {
        dispatch({ type: 'FETCH_DETAILS', payload: eventId });
        console.log(eventId);
        history.push('/details')
    }

    return(
        <div className="results-list">
            {events.map(event => {
                return (
                    <ItemCard 
                        key={event.id}
                        onClick={() => {getID(event.id)}} >
                        <Typography variant="h6"> <li>{event.type ? 'Pickup' : 'Open Skate'} - {event.rink} </li></Typography>
                        <Typography variant="subtitle1">{new Date(event.date).toLocaleDateString('en-us', { weekday:"long", month:"short", day:"numeric"})} - {event.time} - {event.duration} mins</Typography>
                        <Typography variant="subtitle2">{event.skaters} Skaters | {event.goalies} Goalies</Typography>
                    </ItemCard >
                );
            })}
        </div>
    )
}

export default SearchCard;