const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET for all events
router.get('/', (req, res) => {
    const query = `
        SELECT * FROM "events"
        ORDER BY "date" DESC, "time" DESC, "rink" ASC;
        `;
    pool.query(query)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error on query: ${error}`);
            res.sendStatus(500);
        })
});

// GET using search term
router.get('/search', (req, res) => {

    const query = `
        SELECT * FROM "events"
        WHERE ("rink" ILIKE '%$1%')
        OR ("address" ILIKE '%$1%')
        OR ("notes" ILIKE '%$1%')
        OR ("date" = '%$1%')
        OR ("time" = '%$1%');
        `;
    pool.query(query)
        .then((result) => {
            res.send(result.rows);
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
