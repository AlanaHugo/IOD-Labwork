const express = require('express');
const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
  res.send('Hello from Server 2 on port 4000!');
});

app.listen(PORT, () => {
  console.log(`Server 2 running on http://localhost:${PORT}`);
});
