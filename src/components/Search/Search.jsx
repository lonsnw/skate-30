import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './Search.css';

// MUI imports
import { Box, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

// CUSTOM COMPONENTS
import SearchCard from '../SearchCard/SearchCard';
import Footer from '../Footer/Footer'

function Search() {
  const input = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'SEARCH_RESULTS', payload: input });
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
                <SearchCard />              
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