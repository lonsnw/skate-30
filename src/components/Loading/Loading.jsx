import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';

// MUI imports
import { styled } from '@mui/material/styles';
import { Box, Container, Paper, Stack, Typography } from '@mui/material';

// Loading bar import
import BarLoader from 'react-spinners/BarLoader'

function Loading() {

  // STYLING
  const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    borderColor: '#7599BD',
    borderStyle: 'solid',
    borderWidth: '1px',
  }));

  return (
      <Item className="details">
        <Box
          marginTop='30vh'
          minHeight='80vh'
          display='flex'
          flexDirection='column'
          alignItems='center' >
          <Typography variant="h6">Loading</Typography>
          <Stack 
            sx={{ width: '100%' }} 
            spacing={2}
            alignItems='center' >
            <BarLoader color="#8F220F" />
            <BarLoader color="#213345" />
            <BarLoader color="#8F220F" />
            <BarLoader color="#213345" />
            <BarLoader color="#8F220F" />
          </Stack>
        </Box>
      </Item>
  );
}

export default Loading;
