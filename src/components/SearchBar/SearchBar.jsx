import React, { useState } from 'react';
import axios from 'axios';
import './SearchBar.css';

// MUI imports
import { Divider, IconButton, InputBase, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar({setResults}) {

  const [input, setInput] = useState("");

  const fetchData = (value) => {
    axios.get('api/search').then((response) => {
      console.log('Data:', response.data);
      const results = response.data.filter((event) => {
        return (
          value && 
          event && 
          event.rink && 
          event.rink.toLowerCase().includes(value)
        );
      });
      console.log(results);
      setResults(results)
    }).catch((error) => {
      console.log(`Error on search: ${error}`);
      // alert('Something went wrong searching your database')
    });
  }

  const handleChange = (value) => {
    setInput(value);
    fetchData(value)
  }

  return (
    <div className="input-wrapper">
      <Paper
          component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
          >
        <InputBase 
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search for ice"
          value={input} 
          onChange={(e) => handleChange(e.target.value)} />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton sx={{ p: '10px' }} aria-label="search" >
              <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  )
}

export default SearchBar;