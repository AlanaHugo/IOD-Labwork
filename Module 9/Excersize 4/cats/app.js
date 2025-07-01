const express = require('express');
const axios = require('axios');
const app = express();

app.get('/random', async (req, res) => {
  try {
    const response = await axios.get('https://catfact.ninja/fact');
    res.json({ fact: response.data.fact });
  } catch (err) {
    res.status(500).json({ error: 'Could not fetch cat fact' });
  }
});

const PORT = 4000;
app.listen(PORT, () => console.log(`Cats microservice running on port ${PORT}`));
