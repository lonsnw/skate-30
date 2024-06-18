import { combineReducers } from 'redux';

const browseAll = (state = [], action) => {
  switch (action.type) {
    case 'SET_EVENTS':
      return action.payload;
    default:
      return state;
  };
}

const browseUser = (state = [], action) => {
  switch (action.type) {
    case 'SET_SCHEDULE':
      return action.payload;
    default:
      return state;
  }
}

const browsePast = (state = [], action) => {
  switch (action.type) {
    case 'SET_PAST':
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({
    browseAll, 
    browseUser,
    browsePast,
  });