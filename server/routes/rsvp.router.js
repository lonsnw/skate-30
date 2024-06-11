const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// POST for RSVPs
router.post('/', (req, res) => {
  console.log('in rsvp POST', req.body);
  const query = `
  INSERT INTO "rsvp" (user_id, position, pucks, tutor, drinks, event_id)
  VALUES ($1, $2, $3, $4, $5, $6)
  ;`
  pool.query(query, 
    [req.user.id, 
    req.body.position, 
    req.body.pucks, 
    req.body.tutor, 
    req.body.drinks, 
    req.body.event_id,]
  ).then(result => {
      res.send(result.rows);
    }).catch(error => {
      console.log('Error adding RSVP', error);
      res.sendStatus(500);
    })
})

// PUT for events when RSVPed to
router.put('/:id', (req, res) => {
  console.log('in rsvp/events PUT');
  const query =`
  UPDATE "events"
  SET "notes" = '$1'
  WHERE "id" = $2
  ;`
  pool.query(query,
    req.params.notes,
    req.params.event
  ).then(result => {
    res.send(result.rows);
  }).catch(error => {
    console.log('Error updating event with RSVP notes', error);
    res.sendStatus(500);
  })
})

// DELETE for RSVPs
router.delete('/:id', (req, res) => {
  console.log('in rsvp DELETE');
  const query = `
  DELETE from "rsvp"
  WHERE "id" = $1;
  `;
  pool.query(query, [req.params.id]
  ).then(result => {
    res.send(result.rows);
  }).catch(error => {
    console.log('Error removing RSVP', error);
    res.sendStatus(500);
  })
})


module.exports = router;
