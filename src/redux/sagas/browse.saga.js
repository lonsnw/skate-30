import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchEvents() {
    console.log('in fetchEvents saga');
    try{
        const events = yield axios.get('/api/browse');
        yield put ({ type: 'SET_EVENTS', payload: events.data });
    } catch (error) {
        console.log(`Error fetching all events: ${error}`);
        // alert('Something went wrong with your search');
    }
}

function* browseSaga() {
    yield takeLatest('FETCH_EVENTS', fetchEvents);
}

export default browseSaga;