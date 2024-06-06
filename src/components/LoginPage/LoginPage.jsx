import React from 'react';

// MUI imports
import { Box, Container } from '@mui/material';

// CUSTOM COMPONENTS
import LoginForm from '../LoginForm/LoginForm';

function LoginPage() {

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
        </Box>
      </Container>
    </div>
  );
}

export default LoginPage;
