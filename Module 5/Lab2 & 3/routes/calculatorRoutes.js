
console.log("calculatorRoutes loaded");

const express = require("express");
const router = express.Router();

function getNumbers(req, res) {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);

  if (isNaN(a) || isNaN(b)) {
    res.status(400).send("Both 'a' and 'b' must be numbers.");
    return null;
  }

  return { a, b };
}

// http://localhost:5050/calculator/add?a=10&b=4

router.get("/add", (req, res) => {
  console.log("/calculator/add hit", req.query);
  const nums = getNumbers(req, res);
  if (!nums) return;
  res.send(`Result: ${nums.a + nums.b}`);
});

// http://localhost:5050/calculator/subtract?a=10&b=4
router.get("/subtract", (req, res) => {
  console.log("/calculator/subtract hit", req.query);
  const nums = getNumbers(req, res);
  if (!nums) return;
  res.send(`Result: ${nums.a - nums.b}`);
});

//http://localhost:5050/calculator/multiply?a=10&b=4
router.get("/multiply", (req, res) => {
  console.log("/calculator/multiply hit", req.query);
  const nums = getNumbers(req, res);
  if (!nums) return;
  res.send(`Result: ${nums.a * nums.b}`);
});

//http://localhost:5050/calculator/divide?a=10&b=4
router.get("/divide", (req, res) => {
  console.log("/calculator/divide hit", req.query);
  const nums = getNumbers(req, res);
  if (!nums) return;
  if (nums.b === 0) return res.status(400).send("Cannot divide by zero.");
  res.send(`Result: ${nums.a / nums.b}`);
});

module.exports = router;
