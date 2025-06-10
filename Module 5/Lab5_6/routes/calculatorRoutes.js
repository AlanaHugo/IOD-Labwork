console.log("calculatorRoutes loaded");

const express = require("express");
const router = express.Router();
const calculator = require("../controllers/calculatorController");
console.log(calculator);

router.get("/add", calculator.add);
router.get("/subtract", calculator.subtract);
router.get("/multiply", calculator.multiply);
router.get("/divide", calculator.divide);

module.exports = router;
