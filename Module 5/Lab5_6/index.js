const express = require("express");
const calculatorRoutes = require("./routes/calculatorRoutes");

const app = express();
const port = 3000;

app.use("/calculator", calculatorRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
