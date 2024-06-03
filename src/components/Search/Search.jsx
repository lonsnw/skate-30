import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

// MUI imports
import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

// CUSTOM COMPONENTS
import SearchCard from '../SearchCard/SearchCard';
import Footer from '../Footer/Footer'

function Search() {
  const input = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const events = useSelector((store) => store.search.sendSearch);

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
                     {/* Removed because the styling puts it over the last card */}
                      {/* <Box
                        display='flex'
                        flexDirection='row'
                        justifyContent='center'
                        gap={1}
                        position='absolute'
                        bottom='18vh'
                        left='0'
                        right='0'
                        margin='auto'>
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
                          New search
                        </Button>
                      </Box>   */}
                    </Box>
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
  )
}

export default Search;