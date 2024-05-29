import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Home.css';

// This will become Home 
// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function Home() {
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div className="hero">
      <h1>Find  ice times near you</h1>
      <h5>Search for local pickups and open skates</h5>
        <div className="grid-col grid-col_4">
          <RegisterForm />

          <center>
            <h4>Already a Member?</h4>
            <button className="btn btn_sizeSm" onClick={onLogin}>
              Login
            </button>
          </center>
        </div>
      </div>
  );
}

export default Home;
