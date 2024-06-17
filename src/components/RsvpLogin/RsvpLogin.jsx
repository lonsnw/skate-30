import React from 'react';

// MUI imports
import { Box, Chip, Container } from '@mui/material';

// CUSTOM COMPONENTS
import LoginForm from '../LoginForm/LoginForm';

function RsvpLogin() {
  const guestRSVP = () => {
    history.push('/login/rsvp/guest')
  };

  return (
    <div className="hero">
      <Container>
        <Box 
          sx={{ height: '50vh' }}
          display='flex'
          flexDirection='column'
          justifyContent='center'
          marginTop='20px' >
          <Box
            marginTop='34vh' >
            <LoginForm />
          </Box>
          <Box
            margin='auto'>
            <Chip 
              label="Continue as guest" 
              color="primary" 
              onClick={guestRSVP}  />
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default RsvpLogin;
