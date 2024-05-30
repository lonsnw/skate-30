const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET using search term
router.get('/', (req, res) => {
    console.log('In home search GET');
    const query = `
        SELECT (COUNT(NULLIF("position" = FALSE, TRUE))) AS "skaters", (COUNT(NULLIF("position" = TRUE, TRUE))) AS "goalies", "events"."rink", "events"."type", "events"."date", "events"."time", "events"."duration" FROM "events"
        LEFT JOIN "rsvp" ON "events"."id" = "rsvp"."event_id"
        WHERE ("rink" ILIKE '%$1%')
        OR ("address" ILIKE '%$1%')
        OR ("notes" ILIKE '%$1%')
        GROUP BY "events"."id"; 
        `;
    pool.query(query, [req.params.search])
        .then((result) => {
            res.status(200)
            .send(result.rows);
        })
        .catch((error) => {
            console.log(`Error on query: ${error}`);
            res.sendStatus(500);
        })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
