const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET for all events
router.get('/', (req, res) => {
    console.log('In browser GET')
    const query = `
        SELECT * FROM "events"
        ORDER BY "date" ASC, "time" ASC, "rink" DESC;
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

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
