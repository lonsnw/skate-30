const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET for details page
router.get('/:id', (req, res) => {
    console.log('in details GET');
    const query = `
    SELECT (COUNT(NULLIF("position" = FALSE, TRUE))) AS "skaters", (COUNT(NULLIF("position" = TRUE, TRUE))) AS "goalies", "events"."id", "events"."rink", "events"."type", "events"."date", "events"."time", "events"."duration" FROM "events"
    LEFT JOIN "rsvp" ON "events"."id" = "rsvp"."event_id"
    WHERE "id"=$1
    GROUP BY "events"."id";
    `;
    pool.query(query, [req.params.id])
      .then(result => {
        res.send(result.rows);
      })
      .catch(error => {
        console.log('Error getting details', error);
        res.sendStatus(500)
      })
  });

module.exports = router;
