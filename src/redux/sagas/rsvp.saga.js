import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* respondSvp(action) {
    try {
        // Get the event ID:
        const eventId = action.payload.event;
        console.log(eventId);
        const rsvpResponse = yield axios.post(`/api/rsvp`);
        yield put({ type: 'SET_RSVP', payload: rsvpResponse.data })
    } catch (error) {
        console.log('respondSvp error', error);
    }
};

function* deleteSvp(action) {
    try{
        const eventId = action.payload.event;
        console.log(eventId);
        yield axios.post(`/api/rsvp/{$rsvpId}`)
    } catch (error) {
        console.log('deleteSvp error', error);
    }
}

function* rsvpSaga() {
    yield takeLatest('RESPOND_SVP', respondSvp);
    yield takeLatest('DELETE_SVP', deleteSvp);
}

export default rsvpSaga;