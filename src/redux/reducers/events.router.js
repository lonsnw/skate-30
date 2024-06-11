import { combineReducers } from "redux";

const events = (state = [], action) => {
    switch (action.type) {
        case 'ADD_EVENT':
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers({
    events,
});