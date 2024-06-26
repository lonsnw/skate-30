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
      // Get the schedule:
      const userId = action.payload;
      console.log(userId);
      const scheduleResponse = yield axios.get(`/api/browse/schedule`, userId);
      yield put({ type: 'SET_SCHEDULE', payload: scheduleResponse.data })
    } catch (error) {
      console.log('fetchSchedule error', error);
    }
  }

function* fetchPast(action) {
  try {
    // Get the user's past events:
    const userId = action.payload;
    console.log(userId);
    const pastResponse = yield axios.get(`/api/browse/past`, userId);
    yield put({ type: 'SET_PAST', payload: pastResponse.data })
  } catch (error) {
    console.log('pastResponse error', error);
  }
}

function* browseSaga() {
    yield takeLatest('FETCH_EVENTS', fetchEvents);
    yield takeLatest('FETCH_SCHEDULE', fetchSchedule);
    yield takeLatest('FETCH_PAST', fetchPast);
}

export default browseSaga;