import { combineReducers } from 'redux';

const details = (state = [], action) => {
    switch (action.type) {
      case 'SET_DETAILS':
        return action.payload;
      default:
        return state;
    }
  }

export default combineReducers({
    details,
  });