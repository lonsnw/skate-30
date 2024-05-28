import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

// MUI imports
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { Button, Icon } from '@mui/material';

function Nav() {
  const user = useSelector((store) => store.user);

  const logoIcon = (
    <Icon>
      <img alt="logo" src="../../../public/images/skates.svg" />
    </Icon>
  );

  return (
    <div className="nav">
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <div>
            <Link to="/login">
              <AccountCircleIcon />
            </Link>

            <Link to="/home">
              {logoIcon}
            </Link>

            <Link to="/input">
              <AddBoxOutlinedIcon />
            </Link>
          </div>
        )}
        {/* If a user is logged in, show these links */}
        {user.id && (
          <div>
            <Link to="/home">
              <CalendarMonthOutlinedIcon />
            </Link>

            <Link to="/login">
              <AccountCircleIcon />
            </Link>

            <Link to="/input">
              <AddBoxOutlinedIcon />
            </Link>
          </div>
        )}
    </div>
  );
}

export default Nav;
