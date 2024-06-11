import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// MUI imports
import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

// CUSTOM COMPONENTS
import ScheduleCard from '../ScheduleCard/ScheduleCard';
import Loading from '../Loading/Loading';
import Footer from '../Footer/Footer'
import NoneFound from '../NoneFound/NoneFound'

function Browse() {
  const user = useSelector((store) => store.user);
  const events = useSelector((store) => store.browse.browseUser);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_SCHEDULE', payload: user.id }),
    console.log('logged in')
  }, []);

  const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'left',
    marginTop: '20px'
  }));

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
      <Item 
        display='flex'
        flexDirection='column'>
          <Grid className='events'>
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
