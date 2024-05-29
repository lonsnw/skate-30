import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* searchDB(action) {
    try {
        const searchTerm = action.payload;
        console.log(searchTerm);
        const dbResponse = yield axios.get('/api/search');
        yield put({ type: 'SET_SEARCH_RESULTS', payload: dbResponse.data });
    } catch (error) {
        console.log(`Error fetching search results: ${error}`);
        alert('Something went wrong with your search');
    }
}

function* searchSaga() {
    yield takeLatest('FETCH_RESULTS', searchDB);
}

export default searchSaga;