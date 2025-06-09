const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Server 1 on port 3000!');
});

app.listen(PORT, () => {
  console.log(`Server 1 running on http://localhost:${PORT}`);
});
