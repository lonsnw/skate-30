import { useState } from 'react';
import './Search.css';

// MUI imports
import { Box, Chip, Container, Typography } from '@mui/material';

// CUSTOM COMPONENTS
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';

function Search() {

  const [results, setResults] = useState('');

  return (
    <div className="search">
      <SearchBar setResults={setResults} />
      <SearchResults results={results} />
    </div>
  )
}

export default Search;