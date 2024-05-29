import { combineReducers } from 'redux';

const searchResults = (state = [], action) => {
    switch (action.type) {
      case 'SET_SEARCH_RESULTS':
        return action.payload;
      default:
        return state;
    }
  };

const browseAll = (state = [], action) => {
  switch (action.type) {
    case 'SET_EVENTS':
      return action.payload;
    default:
      return state;
  };
}

export default combineReducers({
    searchResults,
    browseAll
  });