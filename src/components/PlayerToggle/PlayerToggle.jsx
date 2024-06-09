import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// MUI imports
import { styled } from '@mui/material/styles';
import { Stack, Switch, Typography } from '@mui/material';

function PlayerToggle(eventId) {
    const history = useHistory();
    const dispatch = useDispatch();
    const details = useSelector(store => store.details.details);
    const user = useSelector((store) => store.user);
    const [toggle, setToggle] = useState(false);
    // currentUser is the array of RSVP information for the current user
    const [currentUser, setCurrentUser] = useState();

    const handleChange = (eventId) => {
        console.log('event id:', eventId);
        dispatch({ type: 'POSITION_RSVP', payload: {
            event_id: eventId,
            position: position
        } })
      };


    useEffect(() => {
        console.log(user.id);
        // Giving time to load
        setTimeout(() => {
         }, 500);
        // On load setting currentUser with user RSVP (or undefined)
        for(let detail of details){
        {detail.user_id === user.id ? (
            setCurrentUser([detail])
        ) : (
            ''
        );}}
        console.log('current user', currentUser)
        {!currentUser ? (
            // sets toggle to false if no currentUser (i.e. no RSVP)
            // and true if there is a currentUser
            setToggle(false)
        ) : (
            setToggle(true)
        )}
        console.log(toggle);
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
            paddingRight='6px'
            spacing={1} >
            <Typography>Skater</Typography>
            <AntSwitch 
                checked={toggle}
                onChange={() => {handleChange(eventId)}} />
            <Typography>Goalie</Typography>
        </Stack>
        </>
    )
}

export default PlayerToggle;