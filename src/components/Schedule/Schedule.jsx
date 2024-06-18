import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// MUI imports
import { Box, Grid } from '@mui/material';

// Custom styling imports
import { MainWrap } from '../Styles/Styles';

// CUSTOM COMPONENTS
import ScheduleCard from '../ScheduleCard/ScheduleCard';
import Loading from '../Loading/Loading';
import Footer from '../Footer/Footer';
import NoneFound from '../NoneFound/NoneFound';
import ScheduleBar from '../LabelBar/ScheduleBar';

function Schedule() {
  const user = useSelector((store) => store.user);
  const events = useSelector((store) => store.browse.browseUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_SCHEDULE', payload: user.id }),
    console.log('logged in')
  }, []);


  let render = '';

  if (events.length === 0) {
    render = <NoneFound />
  } else if (events.length > 0) {
    render = <ScheduleCard />
  } else {
    render = <Loading />
  };

  return (
    <div>
      <ScheduleBar />
      <MainWrap 
        display='flex'
        flexDirection='column'
        className='list-with-label'>
          <Grid >
              <Grid >
                {render}
              {/* {events.length === 0 ? (
                <NoneFound />
                ) : ( (events.length > 0 ? (
                <ScheduleCard />
                ) : (
                <Loading />
              )))} */}
              </Grid>
          </Grid>
      </MainWrap>
      <Box
        width='100vw'
        position='absolute'
        bottom='0'>
        <Footer />
      </Box>
    </div>
  );
}

export default Schedule;
