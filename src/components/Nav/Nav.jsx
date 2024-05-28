import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import { useSelector } from 'react-redux';

// MUI imports
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { Icon, IconButton } from '@mui/material';

function Nav() {
  const user = useSelector((store) => store.user);

  const logoIcon = (
    <Icon style={{ fontSize: 80 }} >
      <img src="../../../public/images/skates.svg" alt="logo" />
    </Icon>
  );

  return (
    <div >
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <div className="nav">
            <Link to="/login">
              <IconButton color="primary">
                <AccountCircleIcon style={{ fontSize: 60 }} />
              </IconButton>
            </Link>
            <div className="logo">
              <Link to="/home">
                {logoIcon}
              </Link>
            </div>
            <Link to="/input">
              <IconButton color="primary">
                <AddBoxOutlinedIcon style={{ fontSize: 60 }} />
              </IconButton>
            </Link>
          </div>
        )}
        {/* If a user is logged in, show these links */}
        {user.id && (
          <div className="nav">
            <Link to="/home">
              <CalendarMonthOutlinedIcon style={{ fontSize: 60 }} />
            </Link>

            <Link to="/login">
              <AccountCircleIcon style={{ fontSize: 60 }} />
            </Link>

            <Link to="/input">
              <AddBoxOutlinedIcon style={{ fontSize: 60 }} />
            </Link>
          </div>
        )}
    </div>
  );
}

export default Nav;
