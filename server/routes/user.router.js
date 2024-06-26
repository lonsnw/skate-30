const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', (req, res, next) => {
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);
  const name = req.body.name;
  const email = req.body.email;
  const queryText = `INSERT INTO "user" (username, password, name, email)
    VALUES ($1, $2, $3, $4) RETURNING id`;
  pool
    .query(queryText, [username, password, name, email])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('User registration failed: ', err);
      res.sendStatus(500);
    });
});

// PUT request to update user profile information
router.put('/', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const query = `UPDATE "user"
	SET "name" = $1,
		"email" = $2
    WHERE "id"=$3;
  `;
  pool.query(query, [name, email, req.user.id])
    .then((result) => {
      res.status(200)
      .send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on query: ${error}`);
      res.sendStatus(500);
    })
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res, next) => {
  // Use passport's built-in method to log out the user
  req.logout((err) => {
    if (err) { return next(err); }
    res.sendStatus(200);
  });
});

module.exports = router;
