const express = require('express');
const router = express.Router();
const catController = require('../controllers/catController');

// GET /api/cats/random
router.get('/random', catController.getRandomFact);

// GET /api/cats?max_length=100
router.get('/', catController.getFactsByLength);

module.exports = router;
