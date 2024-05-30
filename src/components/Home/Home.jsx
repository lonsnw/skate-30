import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './Home.css';

// MUI imports
import { Box, Chip, Container, Typography } from '@mui/material';

// CUSTOM COMPONENTS
import SearchBar from '../SearchBar/SearchBar';

function Home() {
  const user = useSelector((store) => store.user);
  const history = useHistory();
  const [results, setResults] = useState('');


  const browseClick = () => {
    history.push('/browse')
  };

  const goingClick = () => {
    {/* If no user is logged in, do this */}
    // STRETCH: update this to go to Log in - Search
    {!user.id && (
      history.push('/login')
    )}
    {/* If a user is logged in, do this */}
    // STRETCH: update this to go to Find Friends
    {user.id && (
      history.push('/login')
    )}
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
              <Typography variant="h3">Find  ice times near you</Typography>
              <Typography variant="h5">Search for local pickups and open skates</Typography>
              <SearchBar setResults={setResults} />
              <Box
                display='flex'
                flexDirection='row'
                justifyContent='center'
                gap={1}
                margin='10px'>
                <Chip label="See who's going" color="primary" onClick={goingClick} />
                <Chip label="Browse" color="primary" onClick={browseClick}  />
              </Box>
            </Box>
        </Box>
      </Container>
    </div>
  );
}

export default Home;
