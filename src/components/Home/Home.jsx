import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Home.css';

// MUI imports
import { Container } from '@mui/material';

// This will become Home 
// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function Home() {
  const history = useHistory();

  return (
    <div className="hero">

      <h1>Find  ice times near you</h1>
      <h5>Search for local pickups and open skates</h5>
        <div className="grid-col grid-col_4">

          <center>
          </center>
        </div>
      </div>
  );
}

export default Home;
