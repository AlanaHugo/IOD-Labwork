const axios = require('axios');

exports.getRandomFact = async (req, res) => {
  try {
    const response = await axios.get('https://catfact.ninja/fact');
    res.json({ fact: response.data.fact });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch cat fact' });
  }
};

exports.getFactsByLength = async (req, res) => {
  const { max_length } = req.query;
  try {
    const response = await axios.get(`https://catfact.ninja/facts`, {
      params: { limit: 5, max_length } // max 5 facts
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch facts' });
  }
};
