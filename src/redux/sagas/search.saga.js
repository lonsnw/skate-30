import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* searchResults(action) {
    console.log('in searchResults saga');
    try {
        const searchResponse = yield axios.get(`/api/search/`, action.payload);
        yield put ({ type: 'SEND_SEARCH', payload: searchResponse.data })
    } catch {
        console.log('Error with searchResults saga');
    }
}

// function* sendSearch(action) {
//     console.log('in sendSearch saga');
//     yield put ({ type: 'SET_SEARCH', payload: action.payload })
// }

function* searchSaga() {
    yield takeLatest('SEARCH_RESULTS', searchResults);
    yield takeLatest('SEND_SEARCH', sendSearch);
}

export default searchSaga;