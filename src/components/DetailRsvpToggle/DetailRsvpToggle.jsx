import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// MUI imports
import { styled } from '@mui/material/styles';
import { Stack, Switch, Typography } from '@mui/material';

function DetailRsvpToggle(eventId) {
    const history = useHistory();
    const dispatch = useDispatch();
    const details = useSelector(store => store.details.details);
    const user = useSelector((store) => store.user);
    let toggle = false;
    // const [toggle, setToggle] = useState(false);
    // currentUser will be the object of RSVP information for the current user
    let currentUser = {};

    const handleChange = (eventId) => {
        console.log('event id:', eventId);
        dispatch({ type: 'FETCH_RSVP', payload: eventId })
        {/* If no user is logged in, do this */}
        {!user.id && (history.push(`/login`))}
        {/* If a user is logged in, do this */}
        {user.id && (history.push(`/rsvp`))
        }
      };


    useEffect(() => {
        console.log('user id', user.id);
        console.log(details)
        // Giving time to load
        // On load setting currentUser with user RSVP (or undefined)
        for(let detail of details){
        // {detail.user_id === user.id ? (
        //     setCurrentUser(detail)
        // ) : (
        //     setCurrentUser({})
        // );}
        // Trying to remove the possibility of the loop continuing after
        // finding a match; does not solve the issue
            console.log(detail.user_id);
            if (detail.user_id === user.id) {
                console.log('console logging detail', detail);
                // setCurrentUser seems to be the point of failure
                currentUser = detail;
            }
        }
        console.log('current user', currentUser)
        console.log('toggle at start', toggle);
        // {!currentUser ? (
        //     // sets toggle to false if no currentUser (i.e. no RSVP)
        //     // and true if there is a currentUser
        //     setToggle(toggle)
        // ) : (
        //     setToggle(!toggle)
        // )}
        // {Object.keys(currentUser).length === 0 ? (
        //     toggle
        // ) : (
        //     toggle = !toggle
        // )}
        {Object.keys(currentUser).length > 0 && (toggle = !toggle)}
        console.log('after setting toggle:', toggle);
        setTimeout(() => {}, 800);
    }, []);



// STYLING
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
        <>
        <Stack 
            direction="row" 
            spacing={1} >
            <Typography>No</Typography>
            <AntSwitch 
                checked={toggle}
                onChange={() => {handleChange(eventId)}} />
            <Typography>Yes</Typography>
        </Stack>
        </>
    )
}

export default DetailRsvpToggle;