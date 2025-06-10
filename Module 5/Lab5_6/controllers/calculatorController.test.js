const calculator = require('./calculatorController');

describe('Calculator Controller', () => {
  const mockRes = () => {
    const res = {};
    res.send = jest.fn().mockReturnValue(res);
    res.status = jest.fn().mockReturnValue(res);
    return res;
  };

  test('add: returns correct sum', () => {
    const req = { query: { a: "5", b: "3" } };
    const res = mockRes();
    calculator.add(req, res);
    expect(res.send).toHaveBeenCalledWith("Result: 8");
  });

  test('subtract: returns correct difference', () => {
    const req = { query: { a: "10", b: "4" } };
    const res = mockRes();
    calculator.subtract(req, res);
    expect(res.send).toHaveBeenCalledWith("Result: 6");
  });

  test('multiply: returns correct product', () => {
    const req = { query: { a: "6", b: "7" } };
    const res = mockRes();
    calculator.multiply(req, res);
    expect(res.send).toHaveBeenCalledWith("Result: 42");
  });

  test('divide: returns correct quotient', () => {
    const req = { query: { a: "8", b: "2" } };
    const res = mockRes();
    calculator.divide(req, res);
    expect(res.send).toHaveBeenCalledWith("Result: 4");
  });

  test('divide: handles divide by zero', () => {
    const req = { query: { a: "5", b: "0" } };
    const res = mockRes();
    calculator.divide(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.send).toHaveBeenCalledWith("Cannot divide by zero.");
  });

  test('getNumbers: handles non-numeric input', () => {
    const req = { query: { a: "foo", b: "2" } };
    const res = mockRes();
    calculator.add(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.send).toHaveBeenCalledWith("Both 'a' and 'b' must be numbers.");
  });
});
