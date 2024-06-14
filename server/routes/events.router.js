const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// POST for RSVPs
router.post('/', (req, res) => {
  console.log('in events POST', req.body);
  const query = `
  INSERT INTO "events" ("rink", "address", "notes", "type", "level", "exposure", "date", "time", "duration")
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
  ;`
  pool.query(query, 
    [req.body.rink, 
    req.body.address, 
    req.body.notes, 
    req.body.type, 
    req.body.level, 
    req.body.exposure,
    req.body.date,
    req.body.time,
    req.body.duration,]
  ).then(result => {
      res.send(result.rows);
    }).catch(error => {
      console.log('Error adding event', error);
      res.sendStatus(500);
    })
})

module.exports = router;
