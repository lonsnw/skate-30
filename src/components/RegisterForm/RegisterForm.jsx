import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// MUI imports
import { Box, Button, Container, TextField, Typography } from '@mui/material';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();
  const history = useHistory();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
        name: name, 
        email: email, 
        mobile: mobile,
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
        onSubmit={registerUser}>
          <Typography variant="h3">Register</Typography>
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
                required
                variant="outlined"
                fullWidth
                label="User name"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
          </div>
          <div>
            <Typography variant="h6">Password</Typography>
              <TextField
                sx={{ backgroundColor: "#eef2f7" }}
                type="password"
                name="password"
                required
                variant="outlined"
                fullWidth
                label="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
          </div>
          <div>
            <Typography variant="h6">Name</Typography>
              <TextField
                sx={{ backgroundColor: "#eef2f7" }}
                type="name"
                name="name"
                required
                variant="outlined"
                fullWidth
                label="Name"
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
                label="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
          </div>
          <div>
            <Typography variant="h6">Mobile</Typography>
              <TextField
                sx={{ backgroundColor: "#eef2f7" }}
                type="mobile"
                name="mobile"
                variant="outlined"
                fullWidth
                label="Mobile"
                value={mobile}
                onChange={(event) => setMobile(event.target.value)}
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
              name="register"
              value="Register">
              Register
            </Button>
          </Box>
        </Box>
    </Container>
    </>
  );
}

export default RegisterForm;
