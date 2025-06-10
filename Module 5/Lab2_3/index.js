const express = require('express');
const path = require('path'); // ✅ Declare once at the top

const app = express();
const calculatorRoutes = require('./routes/calculatorRoutes');

// Serve static files from the 'public' folder (e.g., Calculator.html, Calculator.js)
app.use(express.static(path.join(__dirname, 'public')));

app.use('/calculator', (req, res, next) => {
  console.log('Request to /calculator path:', req.method, req.url);
  next();
});

// Mount calculator routes
app.use('/calculator', calculatorRoutes);
console.log('Calculator routes mounted');

// Optionally serve a specific HTML file on "/calculator"
app.get('/calculator', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'calculator.html'));
});

const port = 3000;
app.listen(port, () => {
  console.log(`✅ Server running at: http://localhost:${port}`);
});
