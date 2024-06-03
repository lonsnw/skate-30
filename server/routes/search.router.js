const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    console.log("In GET request");
    const query = `
        SELECT (COUNT(NULLIF("position" = FALSE, TRUE))) AS "skaters", (COUNT(NULLIF("position" = TRUE, TRUE))) AS "goalies", "events"."id", "events"."rink", "events"."type", "events"."date", "events"."time", "events"."duration" FROM "events"
        LEFT JOIN "rsvp" ON "events"."id" = "rsvp"."event_id"
        GROUP BY "events"."id";     
    `;
    pool.query(query).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.error(error);
        res.sendStatus(500);
    })
});

module.exports = router;
