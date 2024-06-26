const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET for details page
router.get('/:id', (req, res) => {
    console.log('in details GET');
    const query = `
    SELECT "rsvp"."position", "rsvp"."pucks", "rsvp"."tutor", "rsvp"."drinks", "rsvp"."user_id", "rsvp"."id" AS "rsvp_id", CONCAT("rsvp"."name", "user"."name") AS "attendees", "events"."id" AS "event_id", "events"."rink", "events"."type", "events"."date", "events"."id", "events"."time", "events"."duration",  "events"."address", "events"."level", "events"."exposure", "events"."notes" FROM "events"
    LEFT JOIN "rsvp" ON "events"."id" = "rsvp"."event_id"
    LEFT JOIN "user" ON "rsvp"."user_id" = "user"."id"
    WHERE "events"."id"=$1
    ORDER BY "attendees" ASC;
    `;
    pool.query(query, [req.params.id])
      .then(result => {
        // For testing Loading page
        // setTimeout(() => {res.send(result.rows);}, 20000);
        res.send(result.rows);
      })
      .catch(error => {
        console.log('Error getting details', error);
        res.sendStatus(500)
      })
  });

module.exports = router;
