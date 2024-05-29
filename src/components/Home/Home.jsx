import React, { useState } from 'react';
import './Home.css';

// MUI imports
import { Box, Chip, Container, Divider, IconButton, InputBase, Paper, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

// CUSTOM COMPONENTS
import Hero from '../Hero/Hero';
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
            <Box
              marginTop='34vh' >
              <Typography variant="h3">Find  ice times near you</Typography>
              <Typography variant="h5">Search for local pickups and open skates</Typography>
              <SearchBar />
              <Box
                display='flex'
                flexDirection='row'
                justifyContent='center'
                gap={1}>
                <Chip label="See who's going" color="primary" />
                <Chip label="Browse" color="primary" />
              </Box>
            </Box>
        </Box>
      </Container>
    </div>
  );
}

export default Home;
