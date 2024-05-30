import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// MUI imports
import { styled } from '@mui/material/styles';
import { Paper, Typography } from '@mui/material';

function SearchCard({results}) {
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
        borderColor: '#7599BD',
        borderStyle: 'solid',
        borderWidth: '1px',
        textAlign: 'left',
    }));

    return(
        <div className="results-list">
            {/* claiming that results.map isn't a function */}
            {results.map(event => {
                return (
                    <Item 
                        key={event.id}
                        onClick={() => {getID(event.id)}} >
                        <Typography variant="h6"> <li>{event.type ? 'Pickup' : 'Open Skate'} - {event.rink} </li></Typography>
                        <Typography variant="subtitle1">{new Date(event.date).toLocaleDateString('en-us', { weekday:"long", month:"short", day:"numeric"})} - {event.time} - {event.duration} mins</Typography>
                        <Typography variant="subtitle2">{event.skaters} Skaters | {event.goalies} Goalies</Typography>
                    </Item >
                );
            })}
        </div>
    )
}

export default SearchCard;