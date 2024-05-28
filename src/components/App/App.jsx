import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import './App.css';

function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  const theme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#5280ad',
        light: '#97b3ce',
        dark: '#213345',
      },
      secondary: {
        main: '#ad5280',
        light: '#ce97b3',
        dark: '#452133',
      },
      error: {
        main: '#d22d2f',
        light: '#e48182',
        dark: '#541213',
      },
      warning: {
        main: '#ad7f52',
        dark: '#574029',
        light: '#bd9975',
      },
      info: {
        main: '#5252ad',
        light: '#9797ce',
        dark: '#313168',
      },
      success: {
        main: '#80ad52',
        light: '#b3ce97',
        dark: '#334521',
      },
      background: {
        default: '#eef2f7',
        paper: '#dce6ef',
      },
      typography: {
          fontFamily: "'Lato', sans-serif",
          h1: {
            fontSize: 48,
            fontWeight: 600,
          },
          h2: {
            fontSize: 39,
            fontWeight: 500,
          },
          h3: {
            fontSize: 33,
          },
          h4: {
            fontSize: 28,
          },
          h5: {
            fontSize: 23,
          },
          h6: {
            fontSize: 20,
          },
          subtitle1: {
            fontSize: 18,
          },
          subtitle2: {
            fontSize: 16,
          },
          body1: {
            fontSize: 14,
          },
          body2: {
            fontSize: 12,
          },
          button: {
            fontSize: 14,
            fontWeight: 600,
          },
          caption: {
            fontSize: 12,
          },
          overline: {
            fontSize: 12,
            lineHeight: 1.8,
          },
        },
        spacing: (factor) => `${0.5 * factor}rem`,
        shape: {
          borderRadius: 4,
        },
        props: {
          MuiButton: {
            size: 'small',
          },
          MuiButtonGroup: {
            size: 'small',
          },
          MuiCheckbox: {
            size: 'small',
          },
          MuiFab: {
            size: 'small',
          },
          MuiFormControl: {
            margin: 'dense',
            size: 'small',
          },
          MuiFormHelperText: {
            margin: 'dense',
          },
          MuiIconButton: {
            size: 'small',
          },
          MuiInputBase: {
            margin: 'dense',
          },
          MuiInputLabel: {
            margin: 'dense',
          },
          MuiRadio: {
            size: 'small',
          },
          MuiSwitch: {
            size: 'small',
          },
          MuiTextField: {
            margin: 'dense',
            size: 'small',
          },
          MuiList: {
            dense: true,
          },
          MuiMenuItem: {
            dense: true,
          },
          MuiTable: {
            size: 'small',
          },
        },
    },
  });

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <ThemeProvider theme={theme}>
        <Nav />
        <Switch>
          {/* Visiting localhost:5173 will redirect to localhost:5173/home */}
          <Redirect exact from="/" to="/home" />

          {/* Visiting localhost:5173/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
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
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/info"
          >
            <InfoPage />
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
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the Landing page
              <LandingPage />
            }
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        <Footer />
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;
