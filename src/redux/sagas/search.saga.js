import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* searchResults(action) {
    console.log('in searchResults saga');
    try {
        const searchResponse = yield axios.get(`/api/search/${action.payload}`);
        yield put ({ type: 'SET_SEARCH', payload: searchResponse.data })
    } catch {
        console.log('Error on with searchResults saga');
    }
}

function* searchSaga() {
    yield takeLatest('SEARCH_RESULTS', searchResults);
}

export default searchSaga;