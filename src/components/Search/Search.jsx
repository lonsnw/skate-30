import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// MUI imports
import { Box, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

// CUSTOM COMPONENTS
import SearchCard from '../SearchCard/SearchCard';
import Footer from '../Footer/Footer'

function Search() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_SEARCH' });
  }, []);

  const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'left',
    marginTop: '20px'
  }));

    return(
        <div className="events">
        <Item 
          backgroundColor='secondary'
          display='flex'
          flexDirection='column'>
            <Grid>
                <Grid item>
                  <SearchCard />
                </Grid>
            </Grid>
        </Item>
        <Box
          width='100vw'
          bottom='0px'
          marginTop='-40px'>
          <Footer />
        </Box>
      </div>
    )
}

export default Search;