import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchRsvp(action) {
    try {
        // Get the RSVP:
        const eventId = action.payload;
        console.log(eventId);
        const rsvpResponse = yield axios.get(`/api/rsvp/${eventId}`);
        yield put({ type: 'SET_RSVP', payload: rsvpResponse.data })
    } catch (error) {
        console.log('fetchRSVP error', error);
    }
}

function* rsvpSaga() {
    yield takeLatest('FETCH_RSVP', fetchRsvp);
}

export default rsvpSaga;