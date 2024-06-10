const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// // GET for rsvp page
// router.get('/:id', (req, res) => {
//     console.log('in rsvp GET');
//     const query = `
//     SELECT "rsvp"."event_id", "rsvp"."position", "rsvp"."pucks", "rsvp"."tutor", "rsvp"."drinks", "rsvp"."user_id", "rsvp"."id" AS "rsvp_id", CONCAT("rsvp"."name", "user"."name") AS "attendees", "events"."rink", "events"."type", "events"."date", "events"."id", "events"."time", "events"."duration",  "events"."address", "events"."level", "events"."exposure", "events"."notes" FROM "events"
//     LEFT JOIN "rsvp" ON "events"."id" = "rsvp"."event_id"
//     LEFT JOIN "user" ON "rsvp"."user_id" = "user"."id"
//     WHERE "events"."id"=$1
//     ORDER BY "attendees" ASC;
//     `;
//     pool.query(query, [req.params.id])
//       .then(result => {
//         // For testing Loading page
//         // setTimeout(() => {res.send(result.rows);}, 2000);
//         res.send(result.rows);
//       })
//       .catch(error => {
//         console.log('Error getting details', error);
//         res.sendStatus(500)
//       })
//   });

// POST for RSVPs
router.post('/', (req, res) => {
  console.log('in rsvp POST');
  const query = `
  INSERT INTO "rsvp"
  VALUES ($1, $2, $3, $4, $5, $6)
  ;`
  pool.query(query, 
    req.params.event, 
    req.user.id, 
    req.params.position, 
    req.params.pucks, 
    req.params.tutor, 
    req.params.drinks)
    .then(result => {
      res.send(result.rows);
    })
    .catch(error => {
      console.log('Error adding RSVP', error);
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
  pool.query(query, [req.params.id])
  .then(result => {
    res.send(result.rows);
  })
  .catch(error => {
    console.log('Error removing RSVP', error);
    res.sendStatus(500);
  })
})


module.exports = router;
