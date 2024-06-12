import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

// MUI imports
import { Icon } from '@mui/material';

function Footer() {

  const logoIcon = (
    <Icon style={{ fontSize: 90 }} >
      <img src="/images/skates.svg" alt="logo" />
    </Icon>
  );

  return <footer>
    <div className="logo">
      <Link to="/home">
        {logoIcon}
      </Link>
    </div>
      &copy; 2024 Lons Nadziejka Waller
    </footer>;
}

export default Footer;
