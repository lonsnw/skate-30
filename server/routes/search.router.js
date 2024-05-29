const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET using search term
router.get('/', (req, res) => {
    const query = `
        SELECT * FROM "events"
        WHERE ("rink" ILIKE '%$1%')
        OR ("address" ILIKE '%$1%')
        OR ("notes" ILIKE '%$1%')
        OR ("date" = '%$1%')
        OR ("time" = '%$1%');
        `;
    pool.query(query, [req.params.search])
        .then((result) => {
            res.send(result.rows);
            res.sendStatus(200);
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