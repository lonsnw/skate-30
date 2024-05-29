import React, { useState } from 'react';
import './Home.css';

// MUI imports
import { Box, Button, Container, Divider, IconButton, InputBase, Paper, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

// CUSTOM COMPONENTS
import SearchBar from '../SearchBar/SearchBar';

function Home() {

  return (
    <div className="hero">
      <Container>
        <Box 
          sx={{ height: '50vh' }}
          display='flex'
          flexDirection='column'
          justifyContent='center'
          marginTop='20px' >
          <Typography variant="h3">Find  ice times near you</Typography>
          <Typography variant="h5">Search for local pickups and open skates</Typography>
          <SearchBar />
        </Box>
      </Container>
    </div>
  );
}

export default Home;
