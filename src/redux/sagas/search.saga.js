import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* searchResults(action) {
    console.log('in searchResults saga');
    try {
        yield put ({ type: 'SEND_SEARCH', payload: action.data })
    } catch {
        console.log('Error with searchResults saga');
    }
}

function* searchSaga() {
    yield takeLatest('SEARCH_RESULTS', searchResults);
}

export default searchSaga;