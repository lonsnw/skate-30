import React, { useEffect } from 'react';
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import './App.css';

import About from '../About/About';
import Browse from '../Browse/Browse';
import Details from '../Details/Details';
import Home from '../Home/Home';
import InputDate from '../Input/InputDate';
import InputLocation from '../Input/InputLocation';
import InputReview from '../Input/InputReview';
import LoginPage from '../LoginPage/LoginPage';
import Nav from '../Nav/Nav';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import RegisterPage from '../RegisterPage/RegisterPage';
import RSVP from '../RSVP/RSVP'
import RsvpGuest from '../RsvpGuest/RsvpGuest'
import RsvpLogin from '../RsvpLogin/RsvpLogin';
import Schedule from '../Schedule/Schedule'
import Search from '../Search/Search'
import UserPage from '../UserPage/UserPage';

// MUI imports
import { ThemeProvider } from '@mui/material/styles';

// Custom styling imports
import { theme } from '../Styles/Styles';

function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <main>
        <ThemeProvider theme={theme}>
        <Nav />
        <Switch>
          {/* Visiting localhost:5173 will redirect to localhost:5173/home */}
          <Redirect exact from="/" to="/home" />

          {/* Visiting localhost:5173/about will show the about page. */}
          <Route
            // shows About at all times (logged in or not)
            exact
            path="/about"
          >
            <About />
          </Route>

          {/* Visiting localhost:5173/browse will GET all events if logged out and GET user's events if logged in. */}
          <Route
            // shows About at all times (logged in or not)
            exact
            path="/browse"
          >
            <Browse />
          </Route>

          {/* Visiting localhost:5173/search will show search results. */}
          <Route
            // shows Search results at all times (logged in or not)
            exact
            path="/search/:input"
          >
            <Search />
          </Route>

          {/* Visiting localhost:5173/details will show details from a selected event. */}
          <Route
            // shows Details at all times (logged in or not)
            exact
            path="/details"
          >
            <Details />
          </Route>

          <Route
            // shows RSVP at all times (logged in or not); RSVP fails if not logged in
            exact
            path="/rsvp/:eventId"
          >
            <RSVP />
          </Route>

          <Route
            // shows guest RSVP at all times (logged in or not)
            exact
            path="/guest"
          >
            <RsvpGuest />
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:5173/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:5173/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows Browse for user else shows LoginPage
            exact
            path="/browse/schedule"
          >
            <Schedule />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows Input page for location else shows LoginPage
            exact
            path="/input/location"
          >
            <InputLocation />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows Input page for date else shows LoginPage
            exact
            path="/input/date"
          >
            <InputDate />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows Input page for reviewing/submitting event info else shows LoginPage
            exact
            path="/input/review"
          >
            <InputReview />
          </ProtectedRoute>

          <Route
            exact
            path="/login"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>

          <Route
            // sends user to login to RSVP with a guest option
            exact
            path="/login/rsvp"
          >
              {user.id ?
              // If the user is already logged in, 
              // redirect to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the login page
              <RsvpLogin />
            }
          </Route>

          <Route
            exact
            path="/registration"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the registration page
              <RegisterPage />
            }
          </Route>

          <Route
            exact
            path="/home"
          >
              <Home />
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        </ThemeProvider>
      </main>
    </Router>
  );
}

export default App;
