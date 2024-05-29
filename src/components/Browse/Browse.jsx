import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Browse.css';

// MUI imports
import { Box, Grid, Icon, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

// CUSTOM COMPONENTS
import EventCard from '../EventCard/EventCard';
import Footer from '../Footer/Footer'

function Browse() {
  const dispatch = useDispatch();
  const eventList = useSelector((store) => store.browse.browseAll);

  useEffect(() => {
    dispatch({ type: 'FETCH_EVENTS' });
  }, []);

  const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'left',
    marginTop: '20px'
  }));

  return (
    <div className="events">
      <Item 
        backgroundColor='secondary'
        display='flex'
        flexDirection='column'>
          <Grid>
              <Grid item>
                <EventCard />
              </Grid>
          </Grid>
      </Item>
      <Box
        width='100vw'
        position="absolute"
        bottom="0px">
        <Footer />
      </Box>
    </div>
  );
}

export default Browse;
