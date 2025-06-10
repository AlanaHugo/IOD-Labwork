

const express = require("express");
const calculatorRoutes = require("./routes/calculatorRoutes");
const app = express();
const port = 3000;

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');


app.use(
'/api-docs',
swaggerUi.serve,
swaggerUi.setup(swaggerDocument)
);


app.use("/calculator", calculatorRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
