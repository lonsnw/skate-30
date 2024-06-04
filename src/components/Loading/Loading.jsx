import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';

// MUI imports
import { Box, Container, Typography } from '@mui/material';

function Loading() {
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
            <Typography variant="h3">Loading...</Typography>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default Loading;
