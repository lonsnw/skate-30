import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchEvents() {
    try{
        const eventsResponse = yield axios.get('/api/browse');
        yield put ({ type: 'SET_EVENTS', payload: eventsResponse.data });
    } catch (error) {
        console.log(`Error fetching all events: ${error}`);
        alert('Something went wrong with your search');
    }
}

function* browseSaga() {
    yield takeLatest('FETCH_EVENTS', fetchEvents);
}

export default browseSaga;