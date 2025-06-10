const getAllProducts = async (req, res) => {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};

module.exports = { getAllProducts };
