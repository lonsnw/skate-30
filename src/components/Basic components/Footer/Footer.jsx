import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Footer.css';

// MUI imports
import { Icon } from '@mui/material';

function Footer() {
  const user = useSelector((store) => store.user);

  const logoIcon = (
    <Icon style={{ fontSize: 90 }} >
      <img src="/images/skates.svg" alt="logo" />
    </Icon>
  );

  return <footer>
    <div className="logo">
      {/* If no user is logged in, navigate here */}
      {!user.id && (
        <Link to="/home">
          {logoIcon}
        </Link>
      )}
      {/* If a user is logged in, navigate here */}
      {user.id && (
        <Link to="/browse">
        {logoIcon}
      </Link>
        )}
    </div>
      &copy; 2024 Lons Nadziejka Waller
    </footer>;
}

export default Footer;
