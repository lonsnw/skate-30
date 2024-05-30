import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';

// MUI imports
import { Box, Button, Container, TextField, Typography } from '@mui/material';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (
    <Container>
      <Box
        component='form'
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignContent='center'
        onSubmit={login}>
          <Typography variant="h3">Log in</Typography>
          {errors.loginMessage && (
            <Typography variant="p2" className="alert" role="alert">
              {errors.loginMessage}
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
                label="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
          </div>
          <Box
            display='flex'
            flexDirection='row'
            justifyContent='center'
            gap={1}
            margin='10px'>
            <Button className="btn" type="submit" name="submit" value="Log In">
              Log in
            </Button>
            <Button
              type="button"
              className="btn btn_asLink"
              onClick={() => {
                history.push('/registration');
              }}
            >
              Register
            </Button>
          </Box>
        </Box>
    </Container>
  );
}

export default LoginForm;
