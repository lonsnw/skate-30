import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// MUI imports
import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

// CUSTOM COMPONENTS
import EventCard from '../EventCard/EventCard';
import Footer from '../Footer/Footer';
import NoneFound from '../NoneFound/NoneFound';

function Browse() {
  const events = useSelector((store) => store.browse.browseAll);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_EVENTS' })
  }, []);

  const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'left',
    marginTop: '20px'
  }));

  return (
    <div>
      <Item 
        display='flex'
        flexDirection='column'>
          <Grid className='events'>
              <Grid >
              {
                  events.length === 0 ? (
                    <NoneFound />
                  ) : (
                <EventCard />
                  )
                }
              </Grid>
          </Grid>
      </Item>
      <Box
        width='100vw'
        position='absolute'
        bottom='0'>
        <Footer />
      </Box>
    </div>
  );
}

export default Browse;
