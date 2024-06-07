import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// MUI imports
import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

// CUSTOM COMPONENTS
import ScheduleCard from '../ScheduleCard/ScheduleCard';
import Footer from '../Footer/Footer'

function Browse() {
  const user = useSelector((store) => store.user);
  const events = useSelector((store) => store.browse.browseAll);
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

  return (
    <div>
      <Item 
        display='flex'
        flexDirection='column'>
          <Grid className='events'>
              <Grid >
              {
                  events.length === 0 ? (
                    <Box 
                      sx={{ height: '74vh' }}
                      display='flex'
                      flexDirection='column'
                      justifyContent='center'
                      textAlign='center'>
                      <Typography variant="h5">No entries were found.</Typography>
                      <Box
                        display='flex'
                        flexDirection='row'
                        justifyContent='center'
                        gap={1}
                        margin='10px'>
                        <Button
                          type="button"
                          variant="contained"
                          color="secondary"
                          name="input"
                          onClick={() => {history.push('/input');}}>
                          Add event
                        </Button>
                        <Button
                          type="button"
                          variant="contained"
                          name="try-again"
                          onClick={() => {history.push('/');}}>
                          Home
                        </Button>
                      </Box>
                    </Box>
                  ) : (
                <ScheduleCard />
                )}
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
