import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './Browse.css'

// MUI imports
import { Box, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

// CUSTOM COMPONENTS
import EventCard from '../EventCard/EventCard';
import Footer from '../Footer/Footer'

function Browse() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_EVENTS' });
  }, []);

  const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'left',
    marginTop: '20px'
  }));

  return (
    <div>
      <Item 
        backgroundColor='secondary'
        display='flex'
        flexDirection='column'>
          <Grid >
              <Grid className="events" item>
                <EventCard />
              </Grid>
          </Grid>
      </Item>
      <Box
        width='100vw'
        bottom='0px'
        marginTop='-40px'>
        <Footer />
      </Box>
    </div>
  );
}

export default Browse;
