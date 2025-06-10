const express = require('express');
const cors = require('cors');

const productRoutes = require('./routes/productRoutes');

const app = express();
app.use(cors());
app.use('/api', productRoutes);

const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');
app.use(
'/api-docs',
swaggerUi.serve,
swaggerUi.setup(swaggerDocument)
);

if (require.main === module) {
  app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
  });
}

module.exports = app; // testing
