import React from 'react';
import { useDispatch } from 'react-redux';

// MUI imports
import { Button } from '@mui/material';

function LogOutButton() {
  const dispatch = useDispatch();
  return (
    <Button
      // This button shows up in multiple locations and is styled differently
      // because it's styled differently depending on where it is used, the className
      // is passed to it from its parents through React props
      variant="contained"
      color="secondary"
      onClick={() => dispatch({ type: 'LOGOUT' })}
    >
      Log Out
    </Button>
  );
}

export default LogOutButton;
