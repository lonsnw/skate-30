import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Browse() {
  const dispatch = useDispatch();
  const eventList = useSelector((store) => store.browse.browseAll);

  useEffect(() => {
    dispatch({ type: 'FETCH_EVENTS' });
  }, []);

  return (
    <div>
      <ul>
        {eventList.map(event => {
            return(
                <li key={event.id}>{event.rink} {event.time}</li>);
        })}
      </ul>
    </div>
  );
}

export default Browse;
