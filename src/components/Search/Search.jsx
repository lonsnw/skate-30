import { useState } from 'react';
import './Search.css';

// MUI imports
import { Box, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

// CUSTOM COMPONENTS
import SearchBar from '../SearchBar/SearchBar';
import SearchCard from '../SearchCard/SearchCard';
import Footer from '../Footer/Footer'

function Search() {

  const [results, setResults] = useState('');

  const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'left',
    marginTop: '20px'
  }));

  return (
    <div>
      <Item 
        backgroundColor='secondary'
        display='flex'
        flexDirection='column'>
          <SearchBar setResults={setResults} />
          <Grid >
              <Grid className="events" item>
                <SearchCard results={results} />              
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