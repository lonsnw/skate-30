import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchDetails(action) {
    try {
      // Get the details:
      const eventId = action.payload;
      console.log(eventId);
      const detailsResponse = yield axios.get(`/api/details/${eventId}`);
      yield put({ type: 'SET_DETAILS', payload: detailsResponse.data })
    } catch (error) {
      console.log('fetchDetails error', error);
    }
  }

function* detailsSaga() {
    yield takeLatest('FETCH_DETAILS', fetchDetails);
}

export default detailsSaga;