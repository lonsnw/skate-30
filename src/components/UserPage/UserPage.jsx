import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// MUI imports
import { Box, Button, Container, Divider, Paper, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

// CUSTOM COMPONENTS
import LogOutButton from '../LogOutButton/LogOutButton';
import Footer from '../Footer/Footer'

// FUTURE GOALS:
// Allow users to change their username and password
// Not currently implemented because the password process is involved
// And usernames would need to be checked for conflicts with other usernames

function UserPage() {
  const user = useSelector((store) => store.user);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isNameSelected, setIsNameSelected] = useState(false);
  const [isEmailSelected, setIsEmailSelected] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    setName(user.name);
    setEmail(user.email);
  }, [])

  const updateUser = (event) => {
    event.preventDefault();
    // {!name ? (setName(user.name)) : (name)};
    // {!email ? (setEmail(user.email)) : (email)};
    console.log(name, email);
    dispatch({
      type: 'UPDATE_USER',
      payload: {
        name: name, 
        email: email, 
      },
    });
    window.location.reload();
  };

  const Item = styled(Paper)(({ theme }) => ({
    padding: '16px',
    textAlign: 'left',
    backgroundColor: "#eef2f7",
    border: '1px solid',
  }));

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
          <Typography variant="p1">Double tap the fields below to update your name or email</Typography>
          <Divider />
          <div>
            <br />
            <Typography variant="h6">User name</Typography>
              <Item>
                {user.username}
              </Item>           
          </div>
          <div>
            <Typography variant="h6">Name</Typography>
              {!isNameSelected ? (
                <Item
                  onClick={() => setIsNameSelected(true)}>
                  {user.name}
                </Item>  
              ) : (
                <TextField
                sx={{ backgroundColor: "#eef2f7" }}
                type="name"
                name="name"
                variant="outlined"
                fullWidth
                label={user.name}
                value={name}
                onChange={(event) => setName(event.target.value)}
                onBlur={(event) => setIsNameSelected(false)}
              />
              )}
          </div>
          <div>
            <Typography variant="h6">Email</Typography>
              {!isEmailSelected ? (
                  <Item
                    onClick={() => setIsEmailSelected(true)}>
                    {user.email}
                  </Item>  
              ) : (
                  <TextField
                  sx={{ backgroundColor: "#eef2f7" }}
                  type="email"
                  name="email"
                  variant="outlined"
                  fullWidth
                  label={user.email}
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  onBlur={(event) => setIsEmailSelected(false)}
                />
              )}
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
