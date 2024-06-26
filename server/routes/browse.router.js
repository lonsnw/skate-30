const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET for all events
router.get('/', (req, res) => {
    console.log('In browse GET');
    const query = `
        SELECT (COUNT(NULLIF("position" = FALSE, TRUE))) AS "goalies", (COUNT(NULLIF("position" = TRUE, TRUE))) AS "skaters", "events"."id", "events"."rink", "events"."type", "events"."date", "events"."time", "events"."duration" FROM "events"
        LEFT JOIN "rsvp" ON "events"."id" = "rsvp"."event_id"
        WHERE "events"."date" > now()
        GROUP BY "events"."id"
        ORDER BY "events"."date" ASC;     
    `;
    pool.query(query)
        .then((result) => {
            res.status(200)
            .send(result.rows);
        })
        .catch((error) => {
            console.log(`Error on query: ${error}`);
            res.sendStatus(500);
        })
});

router.get('/schedule', (req, res) => {
    console.log('In schedule GET');
    const query = `
        SELECT (
            SELECT (COUNT(NULLIF("position" = FALSE, TRUE))) FROM "rsvp" WHERE "rsvp"."event_id" = "events"."id"
            ) AS "goalies", (
            SELECT (COUNT(NULLIF("position" = TRUE, TRUE))) FROM "rsvp" WHERE "rsvp"."event_id" = "events"."id"
            ) AS "skaters", "events"."id", "events"."rink", "events"."type", "events"."date", "events"."time", "events"."duration" FROM "events"
            LEFT JOIN "rsvp" ON "events"."id" = "rsvp"."event_id"
            WHERE "rsvp"."user_id" = $1 AND "events"."date" > now()
            GROUP BY "events"."id"
            ORDER BY "events"."date" ASC;   
    `;
    pool.query(query, [req.user.id])
        .then((result) => {
            res.status(200)
            .send(result.rows);
        })
        .catch((error) => {
            console.log(`Error on query: ${error}`);
            res.sendStatus(500);
        })
});

router.get('/past', (req, res) => {
    console.log('In past events GET');
    const query = `
        SELECT (
            SELECT (COUNT(NULLIF("position" = FALSE, TRUE))) FROM "rsvp" WHERE "rsvp"."event_id" = "events"."id"
            ) AS "goalies", (
            SELECT (COUNT(NULLIF("position" = TRUE, TRUE))) FROM "rsvp" WHERE "rsvp"."event_id" = "events"."id"
            ) AS "skaters", "events"."id", "events"."rink", "events"."type", "events"."date", "events"."time", "events"."duration" FROM "events"
            LEFT JOIN "rsvp" ON "events"."id" = "rsvp"."event_id"
            WHERE "rsvp"."user_id" = $1 AND "events"."date" < now()
            GROUP BY "events"."id"
            ORDER BY "events"."date" ASC;    
    `;
    pool.query(query, [req.user.id])
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
