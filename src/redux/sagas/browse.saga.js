import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchEvents() {
    console.log('in fetchEvents saga');
    try{
        const events = yield axios.get('/api/browse');
        yield put ({ type: 'SET_EVENTS', payload: events.data });
    } catch (error) {
        console.log(`Error fetching all events: ${error}`);
        alert('Something went wrong with your search');
    }
}

function* fetchSchedule(action) {
    try {
      // Get the details:
      const userId = action.payload;
      console.log(userId);
      const detailsResponse = yield axios.get(`/api/details/${userId}`);
      yield put({ type: 'SET_SCHEDULE', payload: detailsResponse.data })
    } catch (error) {
      console.log('fetchDetails error', error);
    }
  }

function* browseSaga() {
    yield takeLatest('FETCH_EVENTS', fetchEvents);
    yield takeLatest('FETCH_SCHEDULE', fetchSchedule);
}

export default browseSaga;