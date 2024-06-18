import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// MUI imports
import { Box, Grid } from '@mui/material';

// Custom styling imports
import { MainWrap } from '../Styles/Styles';

// CUSTOM COMPONENTS
import UserPastCard from './UserPastCard';
import Loading from '../Loading/Loading';
import Footer from '../Footer/Footer';
import NoPast from '../NoneFound/NoPast';
import PastBar from '../LabelBar/PastBar';

function UserPastEvents() {
  const user = useSelector((store) => store.user);
  const events = useSelector((store) => store.browse.browsePast);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_PAST', payload: user.id }),
    console.log('logged in')
  }, []);


  let render = '';

  if (events.length === 0) {
    render = <NoPast />
  } else if (events.length > 0) {
    render = <UserPastCard />
  } else {
    render = <Loading />
  };

  return (
    <div className='transition'>
        <PastBar />
        <MainWrap 
            display='flex'
            flexDirection='column'>
            <Grid >
                <Grid >
                    {render}
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

export default UserPastEvents;
