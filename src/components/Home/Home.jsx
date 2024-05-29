import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Home.css';

// MUI imports
import { Box, Button, Container, Divider, IconButton, InputBase, Paper, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

// This will become Home 
// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function Home() {
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
          <Typography variant="h3">Find  ice times near you</Typography>
          <Typography variant="h5">Search for local pickups and open skates</Typography>
          <div className="search-bar">
            <Paper
              component="form"
              sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
            >
              <IconButton sx={{ p: '10px' }} aria-label="menu">
                <MenuIcon />
              </IconButton>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search for ice"
                inputProps={{ 'aria-label': 'search google maps' }}
              />
              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
              <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
          </div>
        </Box>
      </Container>
    </div>
  );
}

export default Home;
