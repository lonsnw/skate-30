import React from 'react';

// MUI imports
import { Box, Container } from '@mui/material';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function RegisterPage() {

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
            <RegisterForm />
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default RegisterPage;
