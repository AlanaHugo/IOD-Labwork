require('dotenv').config();

const express = require('express');
const app = express();
const sequelize = require('./config/db');
// import routes
const userRoutes = require('./routes/userRoutes');
const commentRoutes = require('./routes/commentRoutes');
const postRoutes = require('./routes/postRoutes')

app.use(express.json()); // Middleware to parse JSON bodies

// mount routes
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/comments',commentRoutes);

//test
app.get('/', (req, res) => {
  res.send('Hello from the server!');
});

// Connect and sync database, then start the server
sequelize.sync({ alter: true }) // use { force: true } to drop & recreate tables if needed
  .then(() => {
    console.log('Database connected and synced');
    app.listen(8080, () => {
      console.log('Server running on port 8080');
    });
  })
  .catch((err) => {
    console.error('Error syncing database:', err);
  });
