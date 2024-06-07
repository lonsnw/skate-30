import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// MUI imports
import { Box, Button, Container, TextField, Typography } from '@mui/material';


function UserPage() {
  const user = useSelector((store) => store.user);
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

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
        onSubmit={updateUser}>
          <Typography variant="h4">User information</Typography>
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
          </Box>
        </Box>
    </Container>
    </>
  );
}
export default UserPage;
