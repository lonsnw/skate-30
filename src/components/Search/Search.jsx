import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// MUI imports
import { Box, Button, Grid, Typography } from '@mui/material';

// Custom styling imports
import { MainWrap } from '../Styles/Styles';

// CUSTOM COMPONENTS
import SearchCard from '../SearchCard/SearchCard';
import Footer from '../Footer/Footer'

function Search() {
  const history = useHistory();
  const events = useSelector((store) => store.search.sendSearch);

  return (
    <div>
      <MainWrap 
        display='flex'
        flexDirection='column'
        className='list-no-search'>
          <Grid >
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
                          Try again
                        </Button>
                      </Box>
                    </Box>
                  ) : (
                    <Box 
                    sx={{ height: '74vh' }}
                    display='flex'
                    flexDirection='column'
                    textAlign='center'>
                      <SearchCard />
                    </Box>
                  )
                }            
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
  )
}

export default Search;