const calculator = require("../lib/calculator");
const { log } = require("../lib/logger"); // 3

function getNumbers(req, res) {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  if (isNaN(a) || isNaN(b)) {
    res.status(400).send("Both 'a' and 'b' must be numbers.");
    return null;
  }
  return { a, b };
}

exports.add = (req, res) => {
  const nums = getNumbers(req, res);
  if (!nums) return;
  const result = calculator.add(nums.a, nums.b);
  const id = require("../lib/idGenerator").generateId(); //  2
  log("add", id, result);
  res.send(`Result: ${result}`);
};

exports.subtract = (req, res) => {
  const nums = getNumbers(req, res);
  if (!nums) return;
  const result = calculator.subtract(nums.a, nums.b);
  const id = require("../lib/idGenerator").generateId(); 
  log("subtract", id, result);
  res.send(`Result: ${result}`);
};

exports.multiply = (req, res) => {
  const nums = getNumbers(req, res);
  if (!nums) return;
  const result = calculator.multiply(nums.a, nums.b);
  const id = require("../lib/idGenerator").generateId();
  log("multiply", id, result);
  res.send(`Result: ${result}`);
};
exports.divide = (req, res) => {
  const nums = getNumbers(req, res);
  if (!nums) return;
  const result = calculator.divide(nums.a, nums.b);
  const id = require("../lib/idGenerator").generateId(); //  2
  log("divide", id, result);
  res.send(`Result: ${result}`);
};


