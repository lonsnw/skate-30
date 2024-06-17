import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// MUI imports
import { Stack, Typography } from '@mui/material';

// Custom styling imports
import { CustomInput, CustomLabel, CustomSwitch } from '../Styles/Styles';

function DetailRsvpToggle() {
    const history = useHistory();
    const dispatch = useDispatch();
    const details = useSelector(store => store.details.details);
    const user = useSelector((store) => store.user);
    const [toggle, setToggle] = useState(false);
    // currentUser will be the object of RSVP information for the current user
    let currentUser = {};

    useEffect(() => {
        // On load setting currentUser with user RSVP (or undefined)
        for(let detail of details){
        // Using an if statement to remove the possibility of the loop continuing after
        // finding a match
            if (detail.user_id === user.id) {
                console.log('console logging detail', detail);
                // setCurrentUser seems to be the point of failure
                currentUser = detail;
            }
        };
        // sets toggle to false if no currentUser (i.e. no RSVP)
        // and true if there is a currentUser
        {Object.keys(currentUser).length > 0 && setToggle(!toggle)};
        dispatch({ type: 'SAVE_RSVP', payload: ( currentUser ) });
        console.log('details[0] on RSVP toggle', details[0]);
        console.log('currentUser RSVP on RSVP toggle', currentUser);
    }, []);

    const handleChange = (eventId) => {
        {/* If no user is logged in, do this */}
        {!user.id && (history.push(`/login/rsvp`))}
        {/* If a user is logged in, do this */}
        {user.id && (history.push(`/rsvp/${eventId}`))
        }
      };

    return(
        <>
        <Stack 
            direction="row" 
            spacing={1}>
            <CustomLabel>
                <Typography>No</Typography>
                <CustomInput 
                type='checkbox'
                checked={toggle}
                onChange={() => {handleChange(parseInt(details[0].event_id))}} />
                <CustomSwitch />
                <Typography>Yes</Typography>
            </CustomLabel>
        </Stack>
        </>
    )
}

export default DetailRsvpToggle;