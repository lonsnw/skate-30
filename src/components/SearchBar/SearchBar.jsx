import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './SearchBar.css';

// MUI imports
import { Divider, IconButton, InputBase, Paper } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
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
      // console.log(`Error on search: ${error}`);
      alert('Something went wrong searching your database')
    });
  }

  const handleChange = (value) => {
    setInput(value);
    fetchData(value)
  }

  return (
    <div className="input-wrapper">
      <SearchIcon />
      <input placeholder="Type to search" value={input} onChange={(e) => handleChange(e.target.value)} />
    </div>
  )
}

export default SearchBar;