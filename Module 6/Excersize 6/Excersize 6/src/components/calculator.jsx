import { useState } from 'react';


//declare the caculator function and set the state of two number, operators and result
function Calculator() {

const [num1, setNum1] = useState ('');
const [num2, setNum2] = useState ('');
const [operator, setOperator] = useState ('+');
const [result, setResult] = useState (null);

//onClick function
const handleCalculate = () => {
  const a = parseFloat(num1); //string to number
  const b = parseFloat(num2);
  if (isNaN(a) || isNaN(b)) { //check if a valid umber has been entered
      setResult("Please enter a valid number");
      return;
    }
//switch statement based on chosen operator 
    let res;
    switch (operator) {
      case '+':
        res = a + b;
        break;
      case '-':
        res = a - b;
        break;
      case '*':
        res = a * b;
        break;
      case '/':
        res = b !== 0 ? a / b : "Cannot divide by 0";
        break;
      default:
        res = "Invalid operation";
    }
    setResult(res);
  };

  return (
    <div className="Calculator">
      <h2>Simple Calculator</h2>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="First number"
      />
      <select value={operator} onChange={(e) => setOperator(e.target.value)}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">x</option>
        <option value="/">÷</option>
      </select>
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Second number"
      />
      <button onClick={handleCalculate}>Calculate</button>
      {result !== null && (
        <h3>Result: {result}</h3>
      )}
    </div>
  );
}

export default Calculator;

