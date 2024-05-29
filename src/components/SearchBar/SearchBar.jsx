import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './SearchBar.css';

// MUI imports
import { Divider, IconButton, InputBase, Paper } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar() {
  const user = useSelector((store) => store.user);
  const [search, setSearch] = useState("");

  const history = useHistory();
  const dispatch = useDispatch();

  const sendSearch = (e) => {
    e.preventDefault();
    dispatch({ type: 'SEARCH_DB', payload: search });
    console.log(search);
    // history.push('/browse')
  }

  return (
    <div className="search-bar">
        <div >
        {/* If no user is logged in, show these links */}
        {!user.id && (
          <Paper
          component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
          >
          <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search for ice"
              type="text"
              name="search"
              value={search}
              onChange={(e) => {setSearch(e.target.value)}}
              label="Search"
              required
              fullWidth
          />
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={() => {sendSearch}}>
              <SearchIcon />
          </IconButton>
          </Paper>
        )}
        {/* If a user is logged in, show these links */}
        {user.id && (
          <Paper
          component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
          >
          <IconButton sx={{ p: '10px' }} aria-label="menu">
              <MenuIcon />
          </IconButton>
          <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search for ice"
              inputProps={{ 'aria-label': 'search for ice' }}
          />
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
          </IconButton>
          </Paper>
        )}
    </div>
    </div>    
  );
}

export default SearchBar;