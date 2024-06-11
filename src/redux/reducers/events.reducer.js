import { combineReducers } from "redux";

const input = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_EVENT':
            return {...state, ...action.payload};
        case 'RESET_EVENT':
            return [];
        default:
            return state;
    }
}

export default combineReducers({
    input,
});