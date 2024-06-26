const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 5001;

// Middleware Includes
const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route Includes
const userRouter = require('./routes/user.router');
const browseRouter = require('./routes/browse.router');
const searchRouter = require('./routes/search.router');
const detailsRouter = require('./routes/details.router');
const rsvpRouter = require('./routes/rsvp.router');
const eventsRouter = require('./routes/events.router');

// Express Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('build'));

// Passport Session Configuration
app.use(sessionMiddleware);

// Start Passport Sessions
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api/user', userRouter);
app.use('/api/browse', browseRouter);
app.use('/api/search', searchRouter);
app.use('/api/details', detailsRouter);
app.use('/api/rsvp', rsvpRouter);
app.use('/api/input', eventsRouter);

// Listen Server & Port
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
