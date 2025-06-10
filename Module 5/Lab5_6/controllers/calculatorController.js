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
  res.send(`Result: ${nums.a + nums.b}`);
};

exports.subtract = (req, res) => {
  const nums = getNumbers(req, res);
  if (!nums) return;
  res.send(`Result: ${nums.a - nums.b}`);
};

exports.multiply = (req, res) => {
  const nums = getNumbers(req, res);
  if (!nums) return;
  res.send(`Result: ${nums.a * nums.b}`);
};

exports.divide = (req, res) => {
  const nums = getNumbers(req, res);
  if (!nums) return;
  if (nums.b === 0) return res.status(400).send("Cannot divide by zero.");
  res.send(`Result: ${nums.a / nums.b}`);
};
