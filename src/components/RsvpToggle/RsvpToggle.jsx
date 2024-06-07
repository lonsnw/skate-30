import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// MUI imports
import { styled } from '@mui/material/styles';
import { Box, Card, Grid, Link, Paper, Stack, Switch, Typography } from '@mui/material';

function RsvpToggle() {
    const history = useHistory();
    const details = useSelector(store => store.details.details);
    const user = useSelector((store) => store.user);
    const [toggle, setToggle] = useState(false);
    // currentUser is the array of RSVP information for the current user
    const [currentUser, setCurrentUser] = useState();


    const handleChange = () => {
        {/* If no user is logged in, do this */}
        {!user.id && (history.push(`/login`))}
        {/* If a user is logged in, do this */}
        {user.id && (history.push(`/rsvp/${details[0].id}`)
        )}
      };


    useEffect(() => {
        console.log(user.id);
        // Giving time to load
        setTimeout(() => {
         }, 500);
        // On load setting currentUser if user has RSVPed
        for(let detail of details){
        {detail.user_id === user.id ? (
            setCurrentUser([detail])
        ) : (
            ''
        );}}
        console.log('current user', currentUser)
        {!currentUser ? (
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
        checked: {toggle},
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
                onChange={handleChange} />
            <Typography>Yes</Typography>
        </Stack>
        </>
    )
}

export default RsvpToggle;