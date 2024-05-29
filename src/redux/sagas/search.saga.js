import axios from 'axios';

function* searchDB(action) {
    try {
        const searchTerm = action.payload;
        console.log(searchTerm);
        const dbResponse = yield axios.get()

    }

}
const search = (state = [], action) => {
    if (action.type === 'SEARCH_DB') {
        return []
    }
    return state;
}

export default searchSaga;