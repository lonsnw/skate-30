import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchRsvp(action) {
    try {
        // Get the RSVP:
        const eventId = action.payload;
        console.log('in fetchRSVP', eventId);
        const rsvpResponse = yield axios.get(`/api/rsvp/${eventId}`);
        yield put({ type: 'SET_RSVP', payload: rsvpResponse.data })
    } catch (error) {
        console.log('fetchRSVP error', error);
    }
}

function* respondSvp(action) {
    try {
        yield axios.post(`/api/rsvp`, action.payload);
    } catch (error) {
        console.log('respondSvp error', error);
    }
};

function* deleteSvp(action) {
    try {
        const rsvpId = action.payload;
        yield axios.delete(`/api/rsvp/${rsvpId}`, action.payload);
    } catch (error) {
        console.log('respondSvp error', error);
        alert('Something went wrong removing your registration from this event.')
    }
};

function* rsvpNotes(action) {
    try {
        const eventId = action.payload.event;
        yield axios.put(`/api/rsvp/notes/${eventId}`, action.payload);
    } catch (error) {
        console.log('rsvpNotes error', error);
    }
}


function* rsvpSaga() {
    yield takeLatest('FETCH_RSVP', fetchRsvp);
    yield takeLatest('RESPOND_SVP', respondSvp);
    yield takeLatest('DELETE_SVP', deleteSvp);
    yield takeLatest('RSVP_NOTES', rsvpNotes);
}

export default rsvpSaga;