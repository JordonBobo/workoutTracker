const router = require("express").Router();
const Workout = require("../models/models.js");
const path = require('path');



  router.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/index.html'))
  );
  router.get('/exercise', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/exercise.html'))
  );
  router.get('/stats', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/stats.html'))
  );

  

router.post("/api/transaction", ({ body }, res) => {
  Workout.create(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/transaction/bulk", ({ body }, res) => {
  Workout.insertMany(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/transaction", (req, res) => {
  Workout.find({})
    .sort({ date: -1 })
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
