const express = require('express');
const axios = require('axios');
const router = express.Router();

// GET /api/cats/random
router.get('/random', async (req, res) => {
  try {
    const response = await axios.get('http://localhost:4000/random');
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch cat fact from microservice' });
  }
});

module.exports = router;
