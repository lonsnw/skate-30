import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* postEvent(action) {
    console.log('in postEvent');
    console.log('payload', action.payload);
    try {
        console.log('in try');
        yield axios.post('/api/input', action.payload);
    } catch (error) {
        console.log('postEvent error', error);
    }
};

function* eventsSaga() {
    yield takeLatest('POST_EVENT', postEvent);
}

export default eventsSaga;