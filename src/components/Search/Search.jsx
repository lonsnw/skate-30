import { useState } from 'react';
import './Search.css';

// MUI imports
import { Box, Chip, Container, Typography } from '@mui/material';

// CUSTOM COMPONENTS
import SearchBar from '../SearchBar/SearchBar';
import SearchCard from '../SearchCard/SearchCard';

function Search() {

  const [results, setResults] = useState('');

  return (
    <div className="search">
      <SearchBar setResults={setResults} />
      <SearchCard results={results} />
    </div>
  )
}

export default Search;