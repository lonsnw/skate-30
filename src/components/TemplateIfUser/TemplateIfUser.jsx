import React from 'react';
import { useSelector } from 'react-redux';

function Whatever() {
  const user = useSelector((store) => store.user);

  const whatever = () => {
    {/* If no user is logged in, do this */}
    {!user.id && (
      <div>

      </div>
    )}
    {/* If a user is logged in, do this */}
    {user.id && (
      <div>

      </div>
    )}
  };

  return (
    <>
    
    </>
  )

}