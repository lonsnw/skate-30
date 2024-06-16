import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// MUI imports
import { Box, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

// CUSTOM COMPONENTS
import EventCard from '../EventCard/EventCard';
import Footer from '../Footer/Footer';
import NoneFound from '../NoneFound/NoneFound';
import SearchBar from '../SearchBar/SearchBar';

function Browse() {
  const events = useSelector((store) => store.browse.browseAll);
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_EVENTS' })
  }, []);

  const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'left'
  }));

  return (
    <div>
      {/* If no user is logged in, navigate here */}
      {!user.id && (
        <Item 
        display='flex'
        flexDirection='column'
        className='browse-logged-out'>
          <Grid >
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
      )}
      {/* If a user is logged in, navigate here */}
      {user.id && (
        <div>
          <Box 
            marginTop='20px'>
            <SearchBar />
          </Box>
          <Item 
          display='flex'
          flexDirection='column'>
            <Grid className='browse'>
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
        </div>
      )}
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
