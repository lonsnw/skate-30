import { combineReducers } from 'redux';

const details = (state = [], action) => {
    switch (action.type) {
      case 'SET_DETAILS':
        return action.payload;
      default:
        return state;
    }
  }

const schedule = (state = [], action) => {
    switch (action.type) {
      case 'SET_SCHEDULE':
        return action.payload;
      default:
        return state;
    }
  }

export default combineReducers({
    details,
    schedule
  });