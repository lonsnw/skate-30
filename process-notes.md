## Installs I've run

* npm install
* npm install @mui/material @emotion/react @emotion/styled
* npm install @mui/icons-material
* npm install cookie-session
* npm install @mui/icons-material


## Search notes/guide from Marc:

1. On the `Movies` page, the `MovieItem` component is rendered for each movie in the list. When a user clicks on a movie item, the `showDetails` function is called.

```jsx
const showDetails = () => {
  history.push(`/details/${props.movie.id}`);
};
```

2. Inside the `showDetails` function, the `history.push()` method is used to navigate to the `Details` page. The movie ID is passed as a parameter in the URL.

```jsx
const showDetails = () => {
  history.push(`/details/${props.movie.id}`);
};
```

3. You should have a route in your `App.jsx` that defines the route above so it calls the parameter `id`:

```jsx
<Route path='/details/:id'>
  <Details />
</Route>
```

4. The `Details` page component is rendered, and it receives the movie ID from the URL using the `useParams` hook from `react-router-dom`. The ID is stored in the `id` variable.

```jsx
const { id } = useParams();
```

5. In the `useEffect` hook of the `Details` component, a Redux action is dispatched with the type `'THIS_MOVIE_SAGA'` and the movie ID as the payload: `dispatch({ type: 'THIS_MOVIE_SAGA', payload: id })`.

```jsx
useEffect(() => {
  dispatch({ type: 'THIS_MOVIE_SAGA', payload: id });
}, []);
```

6. The Redux saga middleware intercepts the `'THIS_MOVIE_SAGA'` action and triggers the corresponding saga function, `fetchThisMovie`, passing the action as an argument.

```jsx
function* rootSaga() {
  yield takeEvery('THIS_MOVIE_SAGA', fetchThisMovie);
  // ...
}
```

7. Inside the `fetchThisMovie` saga function, an HTTP POST request is made to the server using `axios.post()` to fetch the movie details based on the provided ID: `const movie = yield axios.post('/api/movie/details', action.payload)`.

```jsx
function* fetchThisMovie(action) {
  try {
    const movie = yield axios.post(`/api/movie/details`, action.payload);
    // ...
  } catch {
    console.log('Get This Movie: Generator Error');
  }
}
```

8. The server receives the request and retrieves the movie data from the database based on the provided ID. It sends back the movie data as a response.

```jsx
router.post('/details', (req, res) => {
  pool
    .query(
      `SELECT * FROM movies JOIN movies_genres ON movies.id = movies_genres.movie_id JOIN genres ON movies_genres.genre_id = genres.id WHERE movie_id=$1;`,
      [req.body.id]
    )
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`ERROR: Get this movie: ${error}`);
      res.sendStatus(500);
    });
});
```

9. The `fetchThisMovie` saga function receives the movie data in the `movie` variable. It then extracts the movie genres from the response data and maps them to an array of objects with `name` and `value` properties.

```jsx
function* fetchThisMovie(action) {
  try {
    const movie = yield axios.post(`/api/movie/details`, action.payload);
    const movieGenres = movie.data.map((genre) => {
      return { name: genre.name, value: genre.genre_id };
    });
    // ...
  } catch {
    console.log('Get This Movie: Generator Error');
  }
}
```

10. The saga function dispatches a Redux action with the type `'SET_MOVIE'` and the movie data as the payload: `yield put({ type: 'SET_MOVIE', payload: { movie: movie.data[0], genres: movieGenres } })`.

```jsx
function* fetchThisMovie(action) {
  try {
    const movie = yield axios.post(`/api/movie/details`, action.payload);
    const movieGenres = movie.data.map((genre) => {
      return { name: genre.name, value: genre.genre_id };
    });
    yield put({
      type: 'SET_MOVIE',
      payload: { movie: movie.data[0], genres: movieGenres },
    });
  } catch {
    console.log('Get This Movie: Generator Error');
  }
}
```

11. The Redux reducer for `thisMovie` receives the `'SET_MOVIE'` action and updates its state with the new movie data: `return action.payload`.

```jsx
const thisMovie = (state = [], action) => {
  switch (action.type) {
    case 'SET_MOVIE':
      return action.payload;
    default:
      return state;
  }
};
```

12. Back in the `Details` component, the `useSelector` hook is used to access the updated `thisMovie` state from the Redux store: `const movie = useSelector((store) => store.thisMovie)`.

```jsx
const movie = useSelector((store) => store.thisMovie);
```

13. The `Details` component renders the movie details on the page. It displays a loading screen (`loadingGif`) until the `movie` reducer has a value.

```jsx
{
  movie.length === 0 ? (
    <img src={loadingGif} />
  ) : (
    <div>// Your rendered component here...</div>
  );
}
```

14. Once the `movie` reducer has a value, the component renders the movie title, poster, genres, and description using the data from the `movie` object.

```jsx
<Typography variant="h5">{movie.movie.title}</Typography>
<img id="movieItemImage" src={movie.movie.poster} alt={movie.movie.title} />
<Typography variant="h5">
    <ul>
        {movie.genres.map((genre) => {
            return <li key={genre.value}>{genre.name}</li>;
        })}
    </ul>
</Typography>
<p id="movieItemDescription">{movie.movie.description}</p>
```

