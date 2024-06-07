import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// MUI imports
import { Box, Button, Container, TextField, Typography } from '@mui/material';

// CUSTOM COMPONENTS
import LogOutButton from '../LogOutButton/LogOutButton';
import Footer from '../Footer/Footer'

function UserPage() {
  const user = useSelector((store) => store.user);
  const errors = useSelector((store) => store.errors);
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  // DO I WANT TO ADD A TAP TO CHANGE FEATURE?
  // const [isUsernameSelected, setIsUsernameSelected] = useState(false);
  // const [isNameSelected, setIsNameSelected] = useState(false);
  // const [isEmailSelected, setIsEmailSelected] = useState(false);
  const dispatch = useDispatch();

  const updateUser = (event) => {
    event.preventDefault();
    dispatch({
      type: 'UPDATE_USER',
      payload: {
        username: username,
        name: name, 
        email: email, 
      },
    });
  }; // end registerUser

  return (
    <>
    <Container>
      <Box
        component='form'
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignContent='center'
        marginTop='40px'
        onSubmit={updateUser}>
          <Typography variant="h4">User profile</Typography>
          {errors.registrationMessage && (
            <Typography variant="p2" className="alert" role="alert">
              {errors.registrationMessage}
            </Typography>
          )}
          <div>
            <Typography variant="h6">User name</Typography>            
              <TextField
                sx={{ backgroundColor: "#eef2f7" }}
                type="text"
                name="username"
                variant="outlined"
                fullWidth
                label={user.username}
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
          </div>
          <div>
            <Typography variant="h6">Name</Typography>
              <TextField
                sx={{ backgroundColor: "#eef2f7" }}
                type="name"
                name="name"
                variant="outlined"
                fullWidth
                label={user.name}
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
          </div>
          <div>
            <Typography variant="h6">Email</Typography>
              <TextField
                sx={{ backgroundColor: "#eef2f7" }}
                type="email"
                name="email"
                variant="outlined"
                fullWidth
                label={user.email}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
          </div>
          <Box
            display='flex'
            flexDirection='row'
            justifyContent='center'
            gap={1}
            margin='10px'>
            <Button 
              type="submit" 
              variant="contained"
              name="update"
              value="Update">
              Update
            </Button>
            <LogOutButton />
          </Box>
        </Box>
    </Container>
    <Box
      width='100vw'
      position='absolute'
      bottom='0'>
      <Footer />
    </Box>
    </>
  );
}
export default UserPage;
