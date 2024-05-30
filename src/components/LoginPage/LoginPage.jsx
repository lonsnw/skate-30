import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';

// MUI imports
import { Box, Container, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

// CUSTOM COMPONENTS
import Footer from '../Footer/Footer'

function LoginPage() {
  const history = useHistory();

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
