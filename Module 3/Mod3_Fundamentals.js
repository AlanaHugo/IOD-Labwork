console.log(" " + 1 + 0); //string concatenation of 1 & 0, result = 10 
console.log(true + false); //boolean becomes an integer with use of "+", result = 1+0 
console.log(!true); //not operator changes !True to False
console.log(6 / "3"); //use of "/" converts string to number, result = 2
console.log("2" * "3"); //use of "*" converts string to number, result = 6
console.log(4 + 5 + "px"); //sum plus number and string concatenation = 9+px, result 9px 
console.log("$" + 4 + 5) // numbers converted to string and concatenated, result = $45
console.log("4" - 2); //use of "-" converts string to a number, result = 2
console.log("4px" - 2); // String - number does not produce a number, result = NaN
console.log(" -9 " + 5); //5 converts to string and concatenates, result = -9 5
console.log(" -9 " - 5); // "-" converts -9 string to a number and subtracts 5, result = -14
console.log(null + 1); //null converts to 0, 0+1, result = 1
console.log(undefined + 1); //undefined has no value, result = NaN
console.log(undefined == null); // type comparison, result = true
console.log(undefined === null); // value and type comparison of no value and 0, result = false 
console.log(" \t \n" - 2); //string has tab/space and a new line which has 
// been trimmed when "-" operator converts to a number, result -2