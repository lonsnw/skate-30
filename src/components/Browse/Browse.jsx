import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// MUI imports
import { Box, Grid } from '@mui/material';

// Custom styling imports
import { MainWrap } from '../Styles/Styles';

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

  return (
    <div>
      {/* If no user is logged in, navigate here */}
      {!user.id && (
        <MainWrap 
        display='flex'
        flexDirection='column'
        className='list-no-search'>
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
        </MainWrap>
      )}
      {/* If a user is logged in, navigate here */}
      {user.id && (
        <div>
          <Box 
            marginTop='20px'
            padding='0px 5px 5px'>
            <SearchBar />
          </Box>
          <MainWrap 
          display='flex'
          flexDirection='column'>
            <Grid className='list-with-search'>
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
          </MainWrap>
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
